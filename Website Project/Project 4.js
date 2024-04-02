(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Project 4_atlas_1", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_2", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_3", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_4", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_5", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_6", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_7", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_8", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_9", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_10", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_11", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_12", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_13", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_14", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_15", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_16", frames: [[0,0,1653,1220]]},
		{name:"Project 4_atlas_17", frames: [[0,0,1604,1208]]},
		{name:"Project 4_atlas_18", frames: [[0,0,1604,1208]]},
		{name:"Project 4_atlas_19", frames: [[0,0,1604,1208]]},
		{name:"Project 4_atlas_20", frames: [[0,0,1604,1208]]},
		{name:"Project 4_atlas_21", frames: [[0,0,1604,1208]]},
		{name:"Project 4_atlas_22", frames: [[0,0,1604,1208]]},
		{name:"Project 4_atlas_23", frames: [[0,0,1604,1208]]},
		{name:"Project 4_atlas_24", frames: [[0,0,1602,1202]]},
		{name:"Project 4_atlas_25", frames: [[0,0,1576,1220]]},
		{name:"Project 4_atlas_26", frames: [[0,0,1499,1220]]},
		{name:"Project 4_atlas_27", frames: [[0,0,1549,1167]]},
		{name:"Project 4_atlas_28", frames: [[0,0,1422,1220]]},
		{name:"Project 4_atlas_29", frames: [[0,0,1495,1126]]},
		{name:"Project 4_atlas_30", frames: [[0,0,1345,1220]]},
		{name:"Project 4_atlas_31", frames: [[0,0,1440,1085]]},
		{name:"Project 4_atlas_32", frames: [[0,0,1268,1220]]},
		{name:"Project 4_atlas_33", frames: [[0,0,1191,1220]]},
		{name:"Project 4_atlas_34", frames: [[0,0,1385,1044]]},
		{name:"Project 4_atlas_35", frames: [[0,0,1114,1220]]},
		{name:"Project 4_atlas_36", frames: [[0,0,1330,1003]]},
		{name:"Project 4_atlas_37", frames: [[0,0,1037,1220]]},
		{name:"Project 4_atlas_38", frames: [[0,0,1276,962]]},
		{name:"Project 4_atlas_39", frames: [[0,0,960,1220]]},
		{name:"Project 4_atlas_40", frames: [[0,0,1221,920]]},
		{name:"Project 4_atlas_41", frames: [[0,0,884,1220]]},
		{name:"Project 4_atlas_42", frames: [[0,0,1166,879],[0,881,1111,838],[1168,0,807,1220]]},
		{name:"Project 4_atlas_43", frames: [[0,1222,1057,797],[732,0,653,1220],[0,0,730,1220]]},
		{name:"Project 4_atlas_44", frames: [[0,0,1002,756],[1079,717,893,674],[1004,0,947,715],[1079,1393,838,633],[0,758,576,1220],[578,758,499,1220]]},
		{name:"Project 4_atlas_45", frames: [[785,1222,863,371],[785,0,728,551],[0,1222,783,592],[771,553,674,510],[0,0,422,1220],[424,0,345,1220],[1515,0,268,1220]]},
		{name:"Project 4_atlas_46", frames: [[2030,19,13,2],[1892,101,136,81],[0,737,665,171],[667,1222,536,51],[1380,737,665,171],[0,1256,536,51],[1205,1256,536,51],[0,910,665,171],[538,1275,536,51],[1380,910,665,171],[0,1309,536,51],[0,1083,665,171],[1076,1309,536,51],[1380,1083,665,171],[621,0,564,428],[0,0,619,469],[621,430,400,305],[1380,0,510,387],[1380,389,455,346],[347,471,236,181],[667,737,291,222],[0,471,345,263],[1892,313,72,58],[1892,0,126,99],[1837,389,181,140],[2020,0,17,17],[2039,5,3,1],[1892,184,154,60],[2039,0,6,3],[1892,246,122,65],[667,961,355,86],[2020,19,8,6],[1837,531,182,85],[1187,0,191,1220]]}
];


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



(lib.CachedBmp_94 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["Project 4_atlas_45"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_88 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_86 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["Project 4_atlas_24"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["Project 4_atlas_17"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["Project 4_atlas_18"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["Project 4_atlas_19"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["Project 4_atlas_20"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["Project 4_atlas_21"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["Project 4_atlas_22"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["Project 4_atlas_27"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["Project 4_atlas_23"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["Project 4_atlas_29"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["Project 4_atlas_34"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["Project 4_atlas_31"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["Project 4_atlas_36"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["Project 4_atlas_40"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["Project 4_atlas_38"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["Project 4_atlas_42"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["Project 4_atlas_43"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["Project 4_atlas_42"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["Project 4_atlas_44"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["Project 4_atlas_44"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["Project 4_atlas_44"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["Project 4_atlas_44"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["Project 4_atlas_45"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["Project 4_atlas_45"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["Project 4_atlas_45"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["Project 4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["Project 4_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["Project 4_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["Project 4_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["Project 4_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["Project 4_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["Project 4_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["Project 4_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["Project 4_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["Project 4_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["Project 4_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["Project 4_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["Project 4_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["Project 4_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["Project 4_atlas_15"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["Project 4_atlas_26"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["Project 4_atlas_25"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["Project 4_atlas_16"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["Project 4_atlas_30"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["Project 4_atlas_32"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["Project 4_atlas_28"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["Project 4_atlas_37"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["Project 4_atlas_35"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["Project 4_atlas_33"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["Project 4_atlas_42"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["Project 4_atlas_41"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["Project 4_atlas_39"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["Project 4_atlas_44"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["Project 4_atlas_43"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["Project 4_atlas_43"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["Project 4_atlas_45"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["Project 4_atlas_44"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["Project 4_atlas_45"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["Project 4_atlas_46"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Project 4_atlas_45"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Weservethebest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_94();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,6.5,1);


(lib.Rice = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_93();
	this.instance.setTransform(0,0,0.4007,0.4007);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.5,32.5);


(lib.RestaurantName = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_92();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,431.5,185.5);


// stage content:
(lib.Project4 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		this.clearAllSoundStreams();
		 
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(185));

	// Closer1
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(-106.4,0.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_2();
	this.instance_1.setTransform(-101.2,0.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(-96,0.55,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_4();
	this.instance_3.setTransform(-90.75,0.55,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_5();
	this.instance_4.setTransform(-85.55,0.55,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_6();
	this.instance_5.setTransform(-80.35,0.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_7();
	this.instance_6.setTransform(-75.15,0.55,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_8();
	this.instance_7.setTransform(-69.95,0.55,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_9();
	this.instance_8.setTransform(-64.7,0.55,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_10();
	this.instance_9.setTransform(-59.5,0.55,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_11();
	this.instance_10.setTransform(-54.3,0.55,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_12();
	this.instance_11.setTransform(-49.1,0.55,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_13();
	this.instance_12.setTransform(-43.85,0.55,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_14();
	this.instance_13.setTransform(-38.65,0.55,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_15();
	this.instance_14.setTransform(-33.45,0.55,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_16();
	this.instance_15.setTransform(-28.25,0.55,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_17();
	this.instance_16.setTransform(-23.05,0.55,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_18();
	this.instance_17.setTransform(-17.8,0.55,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_19();
	this.instance_18.setTransform(-12.6,0.55,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_20();
	this.instance_19.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_21();
	this.instance_20.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_22();
	this.instance_21.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_23();
	this.instance_22.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_24();
	this.instance_23.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_25();
	this.instance_24.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_26();
	this.instance_25.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_27();
	this.instance_26.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_28();
	this.instance_27.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_29();
	this.instance_28.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_30();
	this.instance_29.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_31();
	this.instance_30.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_32();
	this.instance_31.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_33();
	this.instance_32.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_34();
	this.instance_33.setTransform(-7.4,0.55,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_35();
	this.instance_34.setTransform(-7.4,0.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},150).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).wait(1));

	// And_much_more_
	this.instance_35 = new lib.CachedBmp_36();
	this.instance_35.setTransform(403.5,497.2,0.0501,0.2169);
	this.instance_35._off = true;

	this.instance_36 = new lib.CachedBmp_37();
	this.instance_36.setTransform(358,476.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_35}]},136).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[]},15).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(136).to({_off:false},0).wait(1).to({x:403.4999},0).wait(11).to({_off:true},1).wait(36));

	// Rice
	this.instance_37 = new lib.Rice("synched",0);
	this.instance_37.setTransform(640.25,405.85,1.2477,1.1062,0,0,0,27.2,16.3);
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(121).to({_off:false},0).wait(1).to({regY:16.2,x:640.2,y:405.65},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(34));

	// Gyros
	this.instance_38 = new lib.CachedBmp_38();
	this.instance_38.setTransform(394.45,407.1,0.1098,0.1014,0,180,0);
	this.instance_38._off = true;

	this.instance_39 = new lib.CachedBmp_39();
	this.instance_39.setTransform(364.4,389.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_38}]},108).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[]},31).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(108).to({_off:false},0).wait(11).to({_off:true},1).wait(65));

	// Kabobs
	this.instance_40 = new lib.CachedBmp_40();
	this.instance_40.setTransform(157.1,406,0.0421,0.0421);
	this.instance_40._off = true;

	this.instance_41 = new lib.CachedBmp_41();
	this.instance_41.setTransform(118.95,390.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_40}]},95).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[]},44).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(95).to({_off:false},0).wait(11).to({_off:true},1).wait(78));

	// We_serve_the_best_
	this.instance_42 = new lib.Weservethebest("synched",0);
	this.instance_42.setTransform(396.65,279.6,1,1,0,0,0,3.2,0.6);
	this.instance_42._off = true;

	this.instance_43 = new lib.CachedBmp_42();
	this.instance_43.setTransform(308.8,257.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_42}]},81).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[]},57).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(81).to({_off:false},0).wait(1).to({regX:3.3,regY:0.5,x:396.75,y:279.5},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(91));

	// Moving_Words
	this.instance_44 = new lib.RestaurantName("synched",0);
	this.instance_44.setTransform(399.4,-125.35,1,1,0,0,0,215.8,92.8);
	this.instance_44._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(65).to({_off:false},0).wait(1).to({x:399.6,y:-106.6},0).wait(1).to({x:399.8,y:-87.9},0).wait(1).to({x:400,y:-69.15},0).wait(1).to({x:400.25,y:-50.45},0).wait(1).to({x:400.45,y:-31.75},0).wait(1).to({x:400.65,y:-13},0).wait(1).to({x:400.85,y:5.7},0).wait(1).to({x:401.1,y:24.45},0).wait(1).to({x:401.3,y:43.15},0).wait(1).to({x:401.5,y:61.85},0).wait(1).to({x:401.7,y:80.6},0).wait(1).to({x:401.95,y:99.25},0).wait(1).to({x:402.15,y:118},0).wait(1).to({x:402.35,y:136.7},0).wait(1).to({x:402.6,y:155.45},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(34));

	// Transition
	this.instance_45 = new lib.CachedBmp_43();
	this.instance_45.setTransform(388.95,280.95,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_44();
	this.instance_46.setTransform(375.5,271.3,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_45();
	this.instance_47.setTransform(362.1,261.6,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_46();
	this.instance_48.setTransform(348.65,251.95,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_47();
	this.instance_49.setTransform(335.25,242.3,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_48();
	this.instance_50.setTransform(321.8,232.6,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_49();
	this.instance_51.setTransform(308.4,222.95,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_50();
	this.instance_52.setTransform(294.95,213.25,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_51();
	this.instance_53.setTransform(281.55,203.6,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_52();
	this.instance_54.setTransform(268.1,193.95,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_53();
	this.instance_55.setTransform(254.65,184.25,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_54();
	this.instance_56.setTransform(241.25,174.6,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_55();
	this.instance_57.setTransform(227.8,164.9,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_56();
	this.instance_58.setTransform(214.4,155.25,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_57();
	this.instance_59.setTransform(200.95,145.6,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_58();
	this.instance_60.setTransform(187.55,135.9,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_59();
	this.instance_61.setTransform(174.1,126.25,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_60();
	this.instance_62.setTransform(160.7,116.6,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_61();
	this.instance_63.setTransform(147.25,106.9,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_62();
	this.instance_64.setTransform(133.85,97.25,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_63();
	this.instance_65.setTransform(120.4,87.55,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_64();
	this.instance_66.setTransform(106.95,77.9,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_65();
	this.instance_67.setTransform(93.55,68.25,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_66();
	this.instance_68.setTransform(80.1,58.55,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_67();
	this.instance_69.setTransform(66.7,48.9,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_68();
	this.instance_70.setTransform(53.25,39.2,0.5,0.5);

	this.instance_71 = new lib.CachedBmp_69();
	this.instance_71.setTransform(39.85,29.55,0.5,0.5);

	this.instance_72 = new lib.CachedBmp_70();
	this.instance_72.setTransform(26.4,19.9,0.5,0.5);

	this.instance_73 = new lib.CachedBmp_71();
	this.instance_73.setTransform(13,10.2,0.5,0.5);

	this.instance_74 = new lib.CachedBmp_72();
	this.instance_74.setTransform(-0.45,0.55,0.5,0.5);

	this.instance_75 = new lib.CachedBmp_73();
	this.instance_75.setTransform(-0.45,0.55,0.5,0.5);

	this.instance_76 = new lib.CachedBmp_74();
	this.instance_76.setTransform(-0.45,0.55,0.5,0.5);

	this.instance_77 = new lib.CachedBmp_75();
	this.instance_77.setTransform(-0.45,0.55,0.5,0.5);

	this.instance_78 = new lib.CachedBmp_76();
	this.instance_78.setTransform(-0.45,0.55,0.5,0.5);

	this.instance_79 = new lib.CachedBmp_77();
	this.instance_79.setTransform(-0.45,0.55,0.5,0.5);

	this.instance_80 = new lib.CachedBmp_78();
	this.instance_80.setTransform(-0.45,0.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_45}]},30).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[]},86).wait(34));

	// Preloader
	this.instance_81 = new lib.CachedBmp_80();
	this.instance_81.setTransform(236.5,204.5,0.5,0.5);

	this.instance_82 = new lib.CachedBmp_79();
	this.instance_82.setTransform(243,305.5,0.5,0.5);

	this.instance_83 = new lib.CachedBmp_82();
	this.instance_83.setTransform(236.5,204.5,0.5,0.5);

	this.instance_84 = new lib.CachedBmp_81();
	this.instance_84.setTransform(243,305.5,0.5,0.5);

	this.instance_85 = new lib.CachedBmp_84();
	this.instance_85.setTransform(236.5,204.5,0.5,0.5);

	this.instance_86 = new lib.CachedBmp_83();
	this.instance_86.setTransform(243,305.5,0.5,0.5);

	this.instance_87 = new lib.CachedBmp_86();
	this.instance_87.setTransform(236.5,204.5,0.5,0.5);

	this.instance_88 = new lib.CachedBmp_85();
	this.instance_88.setTransform(243,305.5,0.5,0.5);

	this.instance_89 = new lib.CachedBmp_88();
	this.instance_89.setTransform(236.5,204.5,0.5,0.5);

	this.instance_90 = new lib.CachedBmp_87();
	this.instance_90.setTransform(243,305.5,0.5,0.5);

	this.instance_91 = new lib.CachedBmp_90();
	this.instance_91.setTransform(236.5,204.5,0.5,0.5);

	this.instance_92 = new lib.CachedBmp_89();
	this.instance_92.setTransform(243,305.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_82},{t:this.instance_81}]}).to({state:[{t:this.instance_84},{t:this.instance_83}]},5).to({state:[{t:this.instance_86},{t:this.instance_85}]},6).to({state:[{t:this.instance_88},{t:this.instance_87}]},6).to({state:[{t:this.instance_90},{t:this.instance_89}]},6).to({state:[{t:this.instance_92},{t:this.instance_91}]},6).to({state:[]},2).wait(154));

	// Background
	this.instance_93 = new lib.CachedBmp_91();
	this.instance_93.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_93).to({_off:true},31).wait(154));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(293.6,81.9,525.5,528.7);
// library properties:
lib.properties = {
	id: '8604F267DE228540A529F34CD632F657',
	width: 800,
	height: 600,
	fps: 12,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Project 4_atlas_1.png", id:"Project 4_atlas_1"},
		{src:"images/Project 4_atlas_2.png", id:"Project 4_atlas_2"},
		{src:"images/Project 4_atlas_3.png", id:"Project 4_atlas_3"},
		{src:"images/Project 4_atlas_4.png", id:"Project 4_atlas_4"},
		{src:"images/Project 4_atlas_5.png", id:"Project 4_atlas_5"},
		{src:"images/Project 4_atlas_6.png", id:"Project 4_atlas_6"},
		{src:"images/Project 4_atlas_7.png", id:"Project 4_atlas_7"},
		{src:"images/Project 4_atlas_8.png", id:"Project 4_atlas_8"},
		{src:"images/Project 4_atlas_9.png", id:"Project 4_atlas_9"},
		{src:"images/Project 4_atlas_10.png", id:"Project 4_atlas_10"},
		{src:"images/Project 4_atlas_11.png", id:"Project 4_atlas_11"},
		{src:"images/Project 4_atlas_12.png", id:"Project 4_atlas_12"},
		{src:"images/Project 4_atlas_13.png", id:"Project 4_atlas_13"},
		{src:"images/Project 4_atlas_14.png", id:"Project 4_atlas_14"},
		{src:"images/Project 4_atlas_15.png", id:"Project 4_atlas_15"},
		{src:"images/Project 4_atlas_16.png", id:"Project 4_atlas_16"},
		{src:"images/Project 4_atlas_17.png", id:"Project 4_atlas_17"},
		{src:"images/Project 4_atlas_18.png", id:"Project 4_atlas_18"},
		{src:"images/Project 4_atlas_19.png", id:"Project 4_atlas_19"},
		{src:"images/Project 4_atlas_20.png", id:"Project 4_atlas_20"},
		{src:"images/Project 4_atlas_21.png", id:"Project 4_atlas_21"},
		{src:"images/Project 4_atlas_22.png", id:"Project 4_atlas_22"},
		{src:"images/Project 4_atlas_23.png", id:"Project 4_atlas_23"},
		{src:"images/Project 4_atlas_24.png", id:"Project 4_atlas_24"},
		{src:"images/Project 4_atlas_25.png", id:"Project 4_atlas_25"},
		{src:"images/Project 4_atlas_26.png", id:"Project 4_atlas_26"},
		{src:"images/Project 4_atlas_27.png", id:"Project 4_atlas_27"},
		{src:"images/Project 4_atlas_28.png", id:"Project 4_atlas_28"},
		{src:"images/Project 4_atlas_29.png", id:"Project 4_atlas_29"},
		{src:"images/Project 4_atlas_30.png", id:"Project 4_atlas_30"},
		{src:"images/Project 4_atlas_31.png", id:"Project 4_atlas_31"},
		{src:"images/Project 4_atlas_32.png", id:"Project 4_atlas_32"},
		{src:"images/Project 4_atlas_33.png", id:"Project 4_atlas_33"},
		{src:"images/Project 4_atlas_34.png", id:"Project 4_atlas_34"},
		{src:"images/Project 4_atlas_35.png", id:"Project 4_atlas_35"},
		{src:"images/Project 4_atlas_36.png", id:"Project 4_atlas_36"},
		{src:"images/Project 4_atlas_37.png", id:"Project 4_atlas_37"},
		{src:"images/Project 4_atlas_38.png", id:"Project 4_atlas_38"},
		{src:"images/Project 4_atlas_39.png", id:"Project 4_atlas_39"},
		{src:"images/Project 4_atlas_40.png", id:"Project 4_atlas_40"},
		{src:"images/Project 4_atlas_41.png", id:"Project 4_atlas_41"},
		{src:"images/Project 4_atlas_42.png", id:"Project 4_atlas_42"},
		{src:"images/Project 4_atlas_43.png", id:"Project 4_atlas_43"},
		{src:"images/Project 4_atlas_44.png", id:"Project 4_atlas_44"},
		{src:"images/Project 4_atlas_45.png", id:"Project 4_atlas_45"},
		{src:"images/Project 4_atlas_46.png", id:"Project 4_atlas_46"}
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
an.compositions['8604F267DE228540A529F34CD632F657'] = {
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