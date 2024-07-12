Game.registerMod("juicyEnabler",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		if(Game.Objects['Farm'].level > 0 && Game.Objects['Farm'].minigame){
			Game.Objects['Farm'].minigame.plants['queenbeetLump'].plantable = true;
		}
		
		var gardenURL = 'img/gardenPlants.png';
		//note: this mod does nothing but show a notification at the bottom of the screen once it's loaded
		Game.Notify(`Juicy Queenbeet enabler activated`,'',[0,18, gardenURL], 3, 1);
	},
	save:function(){
		//use this to store persistent data associated with your mod
	},
	load:function(str){
		//do stuff with the string data you saved previously
	},
});