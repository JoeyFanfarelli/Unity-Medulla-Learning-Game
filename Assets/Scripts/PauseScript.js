public static var scrollPosition:Vector2 = Vector2.zero;
public static var innerText:String = "Found me!";
var Background:Texture;
var Header:Texture;

var LockedImage:Texture;

var PacifistImage:Texture;
var InvincibleImage:Texture;
var DedicatedImage:Texture;
var ViolentImage:Texture;
var TimeTravelerImage:Texture;
var MoonWalkerImage:Texture;

var BeatFirstImage:Texture;
var BeatSecondImage:Texture;
var BeatThirdImage:Texture;
var BeatFourthImage:Texture;
var BeatFifthImage:Texture;
var BeatSixthImage:Texture;
var BeatSeventhImage:Texture;
var BeatEighthImage:Texture;
var BeatGameImage:Texture;

var KilledOneImage:Texture;
var KilledTenImage:Texture;
var KilledFiftyImage:Texture;

var CureFirstImage:Texture;
var CureThreeImage:Texture;
var CureTenImage:Texture;
var CureAllImage:Texture;
var CureOptionalImage:Texture;

var paused:boolean=false;
var myCheck:boolean=false;
var achievementsActive:boolean=false;

var achievementOne:boolean = false;
var achievementTwo:boolean = false;
var achievementThree:boolean = false;

public static var a1Locked:GameObject;
public static var a1Unlocked:GameObject;

function Awake(){
	a1Unlocked = GameObject.Find("Achieve1Unlocked");
	a1Locked = GameObject.Find("Achieve1Locked");
}

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) { //player presses pause button
		if(!paused){
			Time.timeScale=0;
			paused=true;
		}else{
			Time.timeScale=1;
			paused=false;
		}
	
	
	}
}

function OnGUI(){

	
	
	
	
	if(paused){
		//scrollPosition = GUI.BeginScrollView(new Rect(Screen.width/2-700,Screen.height/2-300,1000,500), scrollPosition, new Rect(0,0,1000,1500));
		//innerText = GUI.TextArea (new Rect(10,20,100,20), innerText);
		//GUI.DrawTexture(Rect(0,0,1080,1920), Background, ScaleMode.StretchToFill, true, 10.0f);
		//GUI.EndScrollView();
		
		
		
		
		if(GUI.Button(Rect (10,130,100,30), "Resume")){
			Time.timeScale=1.0f;
			paused=false;
		}
		
		if(GUI.Button(Rect(10,170,100,30), "Achievements")){
			//Application.LoadLevel(Application.loadedLevel);
			//Time.timeScale=1;
			achievementsActive = true;
		}
	
		if (achievementsActive){
			scrollPosition = GUI.BeginScrollView(new Rect(Screen.width/2-700,Screen.height/2-300,770,500), scrollPosition, new Rect(0,0,770,3000));
			//innerText = GUI.TextArea (new Rect(10,20,100,20), innerText);
			GUI.DrawTexture(Rect(0,0,770,3000), Background, ScaleMode.StretchToFill, true, 10.0f);
			GUI.DrawTexture(Rect(0,0,775,100), Header, ScaleMode.StretchToFill, true, 10.0f);
			//GUI.EndScrollView();
			
			
			if (AchievementWatcher.Pacifist){
				GUI.DrawTexture(Rect(0,100,708,125), PacifistImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.Pacifist){
				GUI.DrawTexture(Rect(0,100,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.Invincible){
				GUI.DrawTexture(Rect(0,226,708,125), InvincibleImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.Invincible){
				GUI.DrawTexture(Rect(0,226,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.Dedicated){
				GUI.DrawTexture(Rect(0,352,708,125), DedicatedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.Dedicated){
				GUI.DrawTexture(Rect(0,352,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.Violent){
				GUI.DrawTexture(Rect(0,478,708,125), ViolentImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.Violent){
				GUI.DrawTexture(Rect(0,478,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.TimeTraveler){
				GUI.DrawTexture(Rect(0,604,708,125), TimeTravelerImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.TimeTraveler){
				GUI.DrawTexture(Rect(0,604,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.MoonWalker){
				GUI.DrawTexture(Rect(0,730,708,125), MoonWalkerImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.MoonWalker){
				GUI.DrawTexture(Rect(0,730,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.CureFirst){
				GUI.DrawTexture(Rect(0,856,708,125), CureFirstImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.CureFirst){
				GUI.DrawTexture(Rect(0,856,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.CureThree){
				GUI.DrawTexture(Rect(0,982,708,125), CureThreeImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.CureThree){
				GUI.DrawTexture(Rect(0,982,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.CureTen){
				GUI.DrawTexture(Rect(0,1108,708,125), CureTenImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.CureTen){
				GUI.DrawTexture(Rect(0,1108,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.CureAll){
				GUI.DrawTexture(Rect(0,1234,708,125), CureAllImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.CureAll){
				GUI.DrawTexture(Rect(0,1234,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			if (AchievementWatcher.CureOptional){
				GUI.DrawTexture(Rect(0,1360,708,125), CureOptionalImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.CureOptional){
				GUI.DrawTexture(Rect(0,1360,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.KillOne){
				GUI.DrawTexture(Rect(0,1486,708,125), KilledOneImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.KillOne){
				GUI.DrawTexture(Rect(0,1486,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.KillTen){
				GUI.DrawTexture(Rect(0,1612,708,125), KilledTenImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.KillTen){
				GUI.DrawTexture(Rect(0,1612,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if (AchievementWatcher.KillFifty){
				GUI.DrawTexture(Rect(0,1738,708,125), KilledFiftyImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.KillFifty){
				GUI.DrawTexture(Rect(0,1738,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatLevelOne){
				GUI.DrawTexture(Rect(0,1864,708,125), BeatFirstImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}else if (!AchievementWatcher.BeatLevelOne){
				GUI.DrawTexture(Rect(0,1864,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			}
			
			
			if(AchievementWatcher.BeatLevelTwo){
				GUI.DrawTexture(Rect(0,1990,708,125), BeatSecondImage, ScaleMode.StretchToFill, true, 10.0f);;
				
			
			}else if (!AchievementWatcher.BeatLevelTwo){
				GUI.DrawTexture(Rect(0,1990,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatLevelThree){
				GUI.DrawTexture(Rect(0,2116,708,125), BeatThirdImage, ScaleMode.StretchToFill, true, 10.0f);
				
			
			}else if (!AchievementWatcher.BeatLevelThree){
				GUI.DrawTexture(Rect(0,2116,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatLevelFour){
				GUI.DrawTexture(Rect(0,2242,708,125), BeatFourthImage, ScaleMode.StretchToFill, true, 10.0f);
				
			
			}else if (!AchievementWatcher.BeatLevelFour){
				GUI.DrawTexture(Rect(0,2242,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatLevelFive){
				GUI.DrawTexture(Rect(0,2368,708,125), BeatFifthImage, ScaleMode.StretchToFill, true, 10.0f);
				
			
			}else if (!AchievementWatcher.BeatLevelFive){
				GUI.DrawTexture(Rect(0,2368,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatLevelSix){
				GUI.DrawTexture(Rect(0,2494,708,125), BeatSixthImage, ScaleMode.StretchToFill, true, 10.0f);
				
			
			}else if (!AchievementWatcher.BeatLevelSix){
				GUI.DrawTexture(Rect(0,2494,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatLevelSeven){
				GUI.DrawTexture(Rect(0,2620,708,125), BeatSeventhImage, ScaleMode.StretchToFill, true, 10.0f);
				
			
			}else if (!AchievementWatcher.BeatLevelSeven){
				GUI.DrawTexture(Rect(0,2620,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatLevelEight){
				GUI.DrawTexture(Rect(0,2746,708,125), BeatEighthImage, ScaleMode.StretchToFill, true, 10.0f);
				
			
			}else if (!AchievementWatcher.BeatLevelEight){
				GUI.DrawTexture(Rect(0,2746,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			
			if(AchievementWatcher.BeatGame){
				GUI.DrawTexture(Rect(0,2872,708,125), BeatGameImage, ScaleMode.StretchToFill, true, 10.0f);
				
			
			}else if (!AchievementWatcher.BeatGame){
				GUI.DrawTexture(Rect(0,2872,708,125), LockedImage, ScaleMode.StretchToFill, true, 10.0f);
			
			}
			
			

			
			
			
			
			
			
			GUI.EndScrollView();
		}
		
		if(GUI.Button(Rect(10,210,100,30), "Restart")){
			Application.LoadLevel(Application.loadedLevel);
			Time.timeScale=1;
			paused=false;
		}
	
		if(GUI.Button(Rect(10,250,100,30), "Quit")){
			Application.Quit();
		}
	}
}



