import System.IO;

import System;  // Used for getting the date
public static var fileExists : boolean = true;
public static var fileNumber = 1;
 

function Start () {

    // Create an instance of StreamWriter to write text to a file.
	while (fileExists){
	
		if (System.IO.File.Exists(Application.dataPath + "/ExpData/JoeyData" + fileNumber + ".csv")){
			fileNumber = fileNumber+1;
		}else{
		    sw = new StreamWriter(Application.dataPath + "/ExpData/JoeyData" + fileNumber + ".csv"); //Need to write data based on participant #

		    // Add some text to the file.

		    //sw.Write("This is the ");

		    //sw.WriteLine("header for the file.");

		    //sw.WriteLine("-------------------");
		    sw.WriteLine("Beatlevelone," + AchievementWatcher.BeatLevelOne);
			sw.WriteLine("Beatleveltwo," + AchievementWatcher.BeatLevelTwo);
			sw.WriteLine("Beatlevelthree," + AchievementWatcher.BeatLevelThree);
			sw.WriteLine("Beatlevelfour," + AchievementWatcher.BeatLevelFour);
			sw.WriteLine("Beatlevelfive," + AchievementWatcher.BeatLevelFive);
			sw.WriteLine("Beatlevelsix," + AchievementWatcher.BeatLevelSix);
			sw.WriteLine("Beatlevelseven," + AchievementWatcher.BeatLevelSeven);
			sw.WriteLine("Beatleveleight," + AchievementWatcher.BeatLevelEight);
			sw.WriteLine("BeatGame," + AchievementWatcher.BeatGame);
			sw.WriteLine("Beatlevelthree," + AchievementWatcher.BeatLevelThree);
			sw.WriteLine("");
			sw.WriteLine("CureFirst," + AchievementWatcher.CureFirst);
			sw.WriteLine("CureAll," + AchievementWatcher.CureAll);
			sw.WriteLine("CureThree," + AchievementWatcher.CureThree);
			sw.WriteLine("CureTen," + AchievementWatcher.CureTen);
			sw.WriteLine("CureOptional," + AchievementWatcher.CureOptional);
			sw.WriteLine("");
			sw.WriteLine("KillOne," + AchievementWatcher.KillOne);
			sw.WriteLine("KillTen," + AchievementWatcher.KillTen);
			sw.WriteLine("KillFifty," + AchievementWatcher.KillFifty);
			sw.WriteLine("");
			sw.WriteLine("Pacifist," + AchievementWatcher.Pacifist);
			sw.WriteLine("Invincible," + AchievementWatcher.Invincible);
			sw.WriteLine("Dedicated," + AchievementWatcher.Dedicated);
			sw.WriteLine("Violent," + AchievementWatcher.Violent);
			sw.WriteLine("TimeTraveler," + AchievementWatcher.TimeTraveler);
			sw.WriteLine("MoonWalker," + AchievementWatcher.MoonWalker);
			sw.WriteLine("");
			sw.WriteLine("EnemiesKilled," + AchievementWatcher.EnemiesKilled);
			sw.WriteLine("CitizensCured," + PlayerHealth.TotalCitizensCured);
			sw.WriteLine("CitizensFailed," + PlayerHealth.TotalCitizensFailed);
			sw.WriteLine("TimesDied," + AchievementWatcher.TimesDied);
			sw.WriteLine("");
			sw.WriteLine("TotalScore," + PlayerHealth.totalScore);
			//sw.WriteLine("LevelOneBonusTime," + PlayerHealth.BonusTimeOne);
			//sw.WriteLine("LevelTwoBonusTime," + PlayerHealth.BonusTimeTwo);
			//sw.WriteLine("LevelThreeBonusTime," + PlayerHealth.BonusTimeThree);
			//sw.WriteLine("LevelFourBonusTime," + PlayerHealth.BonusTimeFour);
			//sw.WriteLine("LevelFiveBonusTime," + PlayerHealth.BonusTimeFive);
			//sw.WriteLine("LevelSixBonusTime," + PlayerHealth.BonusTimeSix);
			//sw.WriteLine("LevelSevenBonusSeven," + PlayerHealth.BonusTimeSeven);
			//sw.WriteLine("LevelEightBonusTime," + PlayerHealth.BonusTimeEight);
		    //sw.WriteLine("TotalGameTime," + PlayerHealth.TotalGameTime);
		    
		    
		    
		    
		    
		    
		    
		    // Arbitrary objects can also be written to the file.

		   // sw.Write("The date is: ");

		   // sw.WriteLine(DateTime.Now);

		    sw.Close();
		    fileExists = false;
		}
	}
}