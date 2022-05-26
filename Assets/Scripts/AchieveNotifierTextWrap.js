public var textObject : TextMesh;

 

private var maxLineChars : int = 10; //maximum number of characters per line...experiment with different values to make it work

 

 

private var words : String[]; 

var result = ""; 

private var charCount : int;

 

function Start () {

    updateText();   //call this function to format your string.

}

 

function updateText () { 

   FormatString(textObject.text); 

}

 

function FormatString ( text : String ) { 

 

    currentLine = 1;

    charCount = 0;

    words = text.Split(" "[0]); //Split the string into seperate words 

    result = ""; 

 

    for (var index = 0; index < words.length; index++) { 

 

        var word = words[index].Trim(); 

    

        if (index == 0) { 

            result = words[0]; 

            textObject.text = result; 

        } 

 

        if (index > 0 ) { 

            charCount += word.Length + 1; //+1, because we assume, that there will be a space after every word

            if (charCount <= maxLineChars) {

                result += " " + word; 

            }

            else {

                charCount = 0;

                result += "\n " + word; 

            }

            

 

            textObject.text = result; 

        } 

    } 

}