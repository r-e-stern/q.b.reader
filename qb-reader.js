function Question(q,a){
    this.questionText = q;
    this.answer = a;
}

function Tossup(q,a,b) {
    Question.call(this, q, a);
    this.bonus = b;
}

function Bonus(p,q0,a0,q1,a1,q2,a2){
    this.prelude = p;
    this.partOne = new Question(q0,a0);
    this.partTwo = new Question(q1,a1);
    this.partThree = new Question(q2,a2);
}

$(document).ready(function(){
    display(process(cut(tossups[Math.floor(Math.random() * Math.floor(24))].questionText)));
});

function cut(string){
    var theArr = [];
    var start = 0;
    for(var i=0; i<string.length; i++){
        if(string.substring(i,i+1)==" "){
            theArr.push(string.substring(start,i));
            start=i+1;
        }
    }
    theArr.push(string.substring(start,string.length));
    return theArr;
}

function process(array){
    var theNewArray = [];
    var bonus = true;
    var starttag;
    for(var i=0; i<array.length; i++){
        starttag="<span ";
        if(bonus){
            starttag += "class='power";
        }else{
            starttag += "class='outta-power";
        }
        if(array[i].substr(0,1)=="[" || array[i].substr(array[i].length-1,1)=="]"){
            starttag+= " bracket";
        }
        starttag+="' id='wd"+(i+1)+"'>";
        if(array[i] == "(*)"){
            bonus = false;
        }
        theNewArray.push(starttag+array[i]+"</span>");
    }
    return theNewArray;
}

function display(array){
    var theStr = "";
    var duration = array.length*400 + 5000;
    for(var i=0; i<array.length; i++){
        theStr+=array[i]+" ";
    }
    $("main").append(theStr);
    $("main span").toggle();
    for(var i=0; i<array.length; i++){
        $("main span:nth-child("+(i+1)+")").delay(i*400).fadeIn(300);
    }
    $("body").append("<div class='button' id=\"stopbutton\"><img src=\"https://image.flaticon.com/icons/png/512/87/87810.png\"><span>BUZZ</span></div>");
    $(".button").click(function() {
        $("span").stop(true, false);
        $(this).off('click').empty().append("<input type='text'/>").addClass("input-box").removeClass("button");
    });
}