const fmod =  (a:number,b:number) => { 
    return Number((a - (Math.floor(a / b) * b)).toPrecision(8));
  };
  
  export const NumberToLetterInFrench = (choice:number) => { 
    let wrd = '';
    let remainder = null;
    // $nwords       
    const assocWords:any = {
                                1: "un", 
                                2: "deux",
                                3: "trois",
                                4: "quatre",
                                5: "cinq",
                                6: "six",
                                7: "sept",
                                8: "huit",
                                9: "neuf",
                                10: "dix", 
                                11: "onze",
                                12: "douze",
                                13: "treize",
                                14: "quatorze",
                                15: "quinze",
                                16: "seize",
                                17: "dix-sept",
                                18: "dix-huit",
                                19: "dix-neuf",
                                20: "vingt",
                                30: "trente", 
                                40 : "quarante",
                                50 : "cinquante",
                                60 : "soixante",
                                70 : "soixante-dix",
                                80 : "quatre-vingt",
                                90 : "quatre-vingt-dix" ,
                                100 : "cent", 
                                1000  : "mille",
                                1000000 :"million",
                                1000000000 :"milliard",
                                "separator" :"", 
                                "minus" :"moins",
                                "and" :"et"
                               };
  
         if(!Number.isInteger(choice)) wrd = '#';
         else if(fmod(choice, 1) != 0) wrd = '#';
         else {
          // if the choice is less than 0
            if(choice < 0) {
               wrd = 'minus ';
               choice = -choice;
            } else {
            wrd = '';
          }
          // choice is less than 21
            if(choice < 21) wrd += assocWords[choice];
          // choice equal to 30, 40, 50, 60
            else if (choice == 30 || choice == 40 || choice == 50 || choice == 60) {
            wrd += assocWords[choice];
            // choice 21 to 99
            } else if(choice < 100) {   
              if((choice > 70 && choice<80) || (choice >= 91)){
                  wrd += assocWords[10 * Math.floor(choice/10) - 10];
                  remainder = fmod(choice, 10 * Math.floor(choice/10) - 10);
                  wrd += '-'+ assocWords[remainder];
              } else {
              wrd += assocWords[10 * Math.floor(choice/10)];
              remainder = fmod(choice, 10);
              if(remainder == 1 && choice < 70){
                  wrd += 'et'+ assocWords[remainder];
              } else {
                wrd += '-'+ assocWords[remainder];
              }
              }   
          // choice from 100 to 999
            } else if(choice < 1000) {   
              if(choice < 200){
                wrd += assocWords[100]; 
              } else {
                wrd += assocWords[Math.floor(choice/100)]+' '+assocWords[100];
              }
  
            remainder = fmod(choice, 100);
            if(remainder == 0 && choice >= 200){
                  wrd += 's';
               } else if(remainder > 0) {
                  wrd += ' '+NumberToLetterInFrench(remainder);
               }
            } else if(choice < 1000000) {   // 1000 to 999999
              if(choice < 2000){
                  wrd += assocWords[1000]; 
              } else {
                  wrd += NumberToLetterInFrench(Math.floor(choice/1000))+' '+assocWords[1000];
                  
              }
               
               remainder = fmod(choice, 1000);
               if(remainder == 0 && choice >= 2000){
                  wrd += 's';
               } else if(remainder > 0) {
                  wrd += ' ';
                  wrd += NumberToLetterInFrench(remainder);
               }
          //  choice upto millions
            } else if(choice < 1000000000) {    
               wrd += NumberToLetterInFrench(Math.floor(choice/1000000))+' '+assocWords[1000000];
               remainder = fmod(choice, 1000000);
               if(remainder == 0 && choice >= 200000){
                  wrd += 's';
               } else if(remainder > 0) {
                  wrd += ' ';
                  wrd += NumberToLetterInFrench(remainder);
               }
            } else { //  milliard
               wrd += NumberToLetterInFrench(Math.floor(choice/1000000000))+' '+assocWords[1000000000];
               remainder = fmod(choice, 1000000000);
               if(remainder == 0 && choice >= 2000000000){
                  wrd += 's';
               }else if(remainder > 0) {
                  wrd += ' ';
                  wrd += NumberToLetterInFrench(remainder);
               }
            }
         }
         return wrd;
      }
  


