var likesCount1= document.querySelector(".likes1");
var count1=likesCount1.innerText.split(" ")[0];
var likesCount2= document.querySelector(".likes2");
var count2=likesCount2.innerText.split(" ")[0];
var likesCount3= document.querySelector(".likes3");
var count3=likesCount3.innerText.split(" ")[0];

function likesPlus(i){
    if(i==1){
        count1++;
        likesCount1.innerText = count1 + "like(s)";
    }
    if (i==2){

        count2++;
        likesCount2.innerText = count2 + "like(s)";
    }
    if (i==3){

        count3++;
        likesCount3.innerText = count3 + "like(s)";
    }
}
