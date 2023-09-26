Game.registerMod("lumpsTooltipInfo",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		var tooltip_func = Game.lumpTooltip;
		var tooltip_s = tooltip_func.toString().replace("function()","");
		tooltip_s = tooltip_s.replace(`var phase=(age/Game.lumpOverripeAge)*7;\n\t\t\tif (phase>=3)\n\t\t\t{\n\t\t\t\tif (Game.lumpCurrentType!=0) str+='<div class="line"></div>';\n\t\t\t\tif (Game.lumpCurrentType==1) str+=loc("This sugar lump grew to be <b>bifurcated</b>; harvesting it has a 50% chance of yielding two lumps.");\n\t\t\t\telse if (Game.lumpCurrentType==2) str+=loc("This sugar lump grew to be <b>golden</b>; harvesting it will yield 2 to 7 lumps, your current cookies will be doubled (capped to a gain of 24 hours of your CpS), and you will find 10% more golden cookies for the next 24 hours.");\n\t\t\t\telse if (Game.lumpCurrentType==3) str+=loc("This sugar lump was affected by the elders and grew to be <b>meaty</b>; harvesting it will yield between 0 and 2 lumps.");\n\t\t\t\telse if (Game.lumpCurrentType==4) str+=loc("This sugar lump is <b>caramelized</b>, its stickiness binding it to unexpected things; harvesting it will yield between 1 and 3 lumps and will refill your sugar lump cooldowns.");\n\t\t\t}`,`str+='<div class="line"></div>'\n\t\t\tif (Game.lumpCurrentType==0)str+=loc("This sugar lump grew to be normal.");\n\t\t\tif (Game.lumpCurrentType==1) str+=loc("This sugar lump grew to be <b>bifurcated</b>; harvesting it has a 50% chance of yielding two lumps.");\n\t\t\telse if (Game.lumpCurrentType==2) str+=loc("This sugar lump grew to be <b>golden</b>; harvesting it will yield 2 to 7 lumps, your current cookies will be doubled (capped to a gain of 24 hours of your CpS), and you will find 10% more golden cookies for the next 24 hours.");\n\t\t\telse if (Game.lumpCurrentType==3) str+=loc("This sugar lump was affected by the elders and grew to be <b>meaty</b>; harvesting it will yield between 0 and 2 lumps.");\n\t\t\telse if (Game.lumpCurrentType==4) str+=loc("This sugar lump is <b>caramelized</b>, its stickiness binding it to unexpected things; harvesting it will yield between 1 and 3 lumps and will refill your sugar lump cooldowns.");`);
		Game.lumpTooltip = new Function(tooltip_s);
		
		var iconsURL = 'img/icons.png';
		//note: this mod does nothing but show a notification at the bottom of the screen once it's loaded
		Game.Notify(`Lumps Tooltip Info activated`,'',[22,17, iconsURL], 3, 1);
	},
	save:function(){
		//use this to store persistent data associated with your mod
	},
	load:function(str){
		//do stuff with the string data you saved previously
	},
});