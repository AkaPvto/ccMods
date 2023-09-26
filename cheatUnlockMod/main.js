Game.registerMod("cheatUnlockMod",{//this string needs to match the ID provided in your info.txt
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		if(Game.Achievements("Cheated cookies taste awful")){
			Game.Notify("This mod [Cheat Unlock Mod] is currently useless . . .",'');
		}
		else{
			Game.Win("Cheated cookies taste awful");
		}
		//note: this mod does nothing but show a notification at the bottom of the screen once it's loaded
		
	},
	save:function(){
		//use this to store persistent data associated with your mod
	},
	load:function(str){
		//do stuff with the string data you saved previously
	},
});