//Mentor at Hackathon: Ana Luczynski, PJ Macklin, William Ferguson

var input;

var bingClientTTS = new BingSpeech.TTSClient("93c5a3b498194419a31eaca0e731c7f6");
document.getElementById("speakBtn").addEventListener("click", function () {
    bingClientTTS.multipleXHR = document.getElementById("multipleXHRChk").checked;
    var i=0;
    var j=0;
    var k=0;
    var stop1;
    input = [];

    var marker = 0;
    var track = 0;
    var sections = [];
    var keywords = ["first name ", "street address ", "soda security number "];

    for(i = 0;i < info.regions.length;i++)
    {

        for(j = 0; j < info.regions[i].lines.length;j++)
        {
            
            var text = "";
            for(k =0;k < info.regions[i].lines[j].words.length;k++ )
            {
                text+= info.regions[i].lines[j].words[k].text + " ";
            }

            sections.push(text);
            
        }
    }
    stop1 = sections.length;
    stop1 = sections.findIndex(function(element) {
            var temp;
            if(element.toLowerCase() === keywords[track])
             temp = element;
            else{
            temp = sections[length-1];}
            return temp;
        //return element.toLowerCase() === keywords[track];
      });
    console.log(stop1);

    function talk() {
        bingClientTTS.synthesize(sections[marker], "en", function(){
            marker++;
            if(marker == sections.length){return;}
            
            if(marker <=  stop1) //|| track >= keywords.length)
            {
                talk();
            }
            else
            {
                input.push({"name": keywords[track], "info": prompt(keywords[track] + ": ")});
                bingClientTTS.synthesize(input[track].info);
                track++;
                stop1 = sections.findIndex(function(element) {
                    return element.toLowerCase() === keywords[track];
                  });

                talk();
                
            }
        });
    }
    

    // while(marker < stop){
    //     talk(marker);
    //     marker += 1;
    // }

    talk();

    console.log(input);
   // firstName = prompt("First Name: ");

    /*
    bingClientTTS.synthesize(text);
            if(text.toLowerCase() === "first name ")
            {
                
                firstName = prompt("First Name: ");
                bingClientTTS.synthesize(firstName);
            }
            else if(text.toLowerCase() === "street address ")
            {
                streetAddress = prompt("Street Address: ");
                bingClientTTS.synthesize(streetAddress);
            }
            else if(text.toLowerCase() === "soda security number ")
            {
                sodaSecurity = prompt("Social Security: ");
                bingClientTTS.synthesize(sodaSecurity);
            }
    */

});

//# sourceMappingURL=demo.js.map