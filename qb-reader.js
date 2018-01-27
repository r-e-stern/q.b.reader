var POINTS = 0;
var ON_TOSSUP = 0;
var WRONG = [];

function Question(q,a,s){
    this.questionText = q;
    this.answer = a;
    this.source =[];
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

function Source(n, c){
    this.name=n;
    this.category=c;
}

function Movie(t){
    this.title = t;
    Source.call(t,"movie");
}

function Episode(t,s,n,e){
    this.series = s;
    this.season= n;
    this.episode = e;
    this.title=t;
    Source.call(t,"episode");
}


$(document).ready(function(){
    fillProgress();
    $(document).keyup(function(){
        if(event.code == "Enter"){
            $(".button").click();
        }
    });
    $("nav").click(function(){
        tossup();
    });
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
        setTimeout(function(){console.log("Time expired");},10000);
    });
}

function tossup(){
    $("main").empty().append("<span class='countdown'>3</span>");
    setTimeout(function(){$("main").empty().append("<span class='countdown'>2</span>");},1000);
    setTimeout(function(){$("main").empty().append("<span class='countdown'>1</span>");},2000);
    setTimeout(function(){
        $("main").empty();
        display(process(cut(tossups[ON_TOSSUP].questionText)));
        },3000);
}

function fillProgress(){
    for(var i=0; i<tossups.length; i++){
        $("#progress").append("<span id='prog"+(i+1)+"'>"+(i+1)+"</span>");
    }
    var pct = 86/tossups.length + "%";
    $("#progress span:not(span:first-of-type)").css('width',pct);
}