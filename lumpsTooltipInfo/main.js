Game.registerMod("lumpsTooltipInfo",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		Game.lumpTooltip = function()
		{
			var str='<div style="padding:8px;width:400px;font-size:11px;text-align:center;" id="tooltipLumps">'+
			loc("You have %1.",'<span class="price lump">'+loc("%1 sugar lump",LBeautify(Game.lumps))+'</span>')+
			'<div class="line"></div>'+
			loc("A <b>sugar lump</b> is coalescing here, attracted by your accomplishments.");
			
			var age=Date.now()-Game.lumpT;
			str+='<div class="line"></div>';
			if (age<0) str+=loc("This sugar lump has been exposed to time travel shenanigans and will take an excruciating <b>%1</b> to reach maturity.",Game.sayTime(((Game.lumpMatureAge-age)/1000+1)*Game.fps,-1));
			else if (age<Game.lumpMatureAge) str+=loc("This sugar lump is still growing and will take <b>%1</b> to reach maturity.",Game.sayTime(((Game.lumpMatureAge-age)/1000+1)*Game.fps,-1));
			else if (age<Game.lumpRipeAge) str+=loc("This sugar lump is mature and will be ripe in <b>%1</b>.<br>You may <b>click it to harvest it now</b>, but there is a <b>50% chance you won't get anything</b>.",Game.sayTime(((Game.lumpRipeAge-age)/1000+1)*Game.fps,-1));
			else if (age<Game.lumpOverripeAge) str+=loc("<b>This sugar lump is ripe! Click it to harvest it.</b><br>If you do nothing, it will auto-harvest in <b>%1</b>.",Game.sayTime(((Game.lumpOverripeAge-age)/1000+1)*Game.fps,-1));
			
			str+='<div class="line"></div>';
			if (Game.lumpCurrentType==0) str+=loc("This sugar lump grew normal.");
			if (Game.lumpCurrentType==1) str+=loc("This sugar lump grew to be <b>bifurcated</b>; harvesting it has a 50% chance of yielding two lumps.");
			else if (Game.lumpCurrentType==2) str+=loc("This sugar lump grew to be <b>golden</b>; harvesting it will yield 2 to 7 lumps, your current cookies will be doubled (capped to a gain of 24 hours of your CpS), and you will find 10% more golden cookies for the next 24 hours.");
			else if (Game.lumpCurrentType==3) str+=loc("This sugar lump was affected by the elders and grew to be <b>meaty</b>; harvesting it will yield between 0 and 2 lumps.");
			else if (Game.lumpCurrentType==4) str+=loc("This sugar lump is <b>caramelized</b>, its stickiness binding it to unexpected things; harvesting it will yield between 1 and 3 lumps and will refill your sugar lump cooldowns.");
			
			str+='<div class="line"></div>';
			str+=loc("Your sugar lumps mature after <b>%1</b>,<br>ripen after <b>%2</b>,<br>and fall after <b>%3</b>.",[Game.sayTime((Game.lumpMatureAge/1000)*Game.fps,-1),Game.sayTime((Game.lumpRipeAge/1000)*Game.fps,-1),Game.sayTime((Game.lumpOverripeAge/1000)*Game.fps,-1)]);
			
			str+='<div class="line"></div>'+loc("&bull; Sugar lumps can be harvested when mature, though if left alone beyond that point they will start ripening (increasing the chance of harvesting them) and will eventually fall and be auto-harvested after some time.<br>&bull; Sugar lumps are delicious and may be used as currency for all sorts of things.<br>&bull; Once a sugar lump is harvested, another one will start growing in its place.<br>&bull; Note that sugar lumps keep growing when the game is closed.")+'</div>';
			return str;
		};
		
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