var POINTS = 0;
var ON_TOSSUP = 0;
var WRONG = [];
var tossupTimeout;

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
    $("body").append("<div class='button' id=\"stopbutton\">"
        +"<img src=\"https://image.flaticon.com/icons/png/512/87/87810.png\"><span>BUZZ</span></div>");
    $(".button").click(function() {
        $("span").stop(true, false);
        $(this).off('click').empty().append("<input type='text'/>").addClass("input-box").removeClass("button");
        tossupTimeout = setTimeout(function(){checkTossupAns()},10000);
        $(".input-box input").keyup(function(){
            if(event.code == "Enter"){
                checkTossupAns();
                clearTimeout(tossupTimeout);
            }
        });
    });
}

function tossup(){
    $(".input-box").remove();
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

function checkTossupAns(){
    $('.input-box input').prop('disabled',true);
    $('.input-box').append("<span><i>ANSWER:</i> "+tossups[ON_TOSSUP].answer+"</span>"
        +"<div id='wright' data-truth='true'>I was<br/>correct.</div>"
        +"<div id='wrong' data-truth='false'>I was<br/>incorrect.</div>");
    $('.input-box span').toggle().slideDown(400);
    $('.input-box div').toggle().delay(500).slideDown(400).click(function(){
        if($(this).attr("data-truth")=="true"){
            if(isPower()=="true"){
                POINTS+=15;
            }else{
                POINTS+=10;
            }
            $("#pointct span").html(parseInt(POINTS));
            $("#progress span:nth-child("+(ON_TOSSUP+2)+")").addClass("correct");
            bonus();
        }else{
            if(isPower()!="finished"){
                POINTS-=5;
            }
            $("#pointct span").html(parseInt(POINTS));
            $("#progress span:nth-child("+(ON_TOSSUP+2)+")").addClass("incorrect");
            for(var i=0; i<tossups[ON_TOSSUP].source.length; i++){
                WRONG.push(tossups[ON_TOSSUP].source[i]);
            }
            ON_TOSSUP++;
            tossup();
        }
    });
}

function isPower(){
    var lastDisplayed;
    for(var i=0; i<$("main span").length; i++){
        if($("main span:nth-child("+(i+1)+")").attr("style")!=""){
            lastDisplayed=i;
            break;
        }
        if(i==$("main span").length-1){
            return "finished";
        }
    }
    if($("main span:nth-child("+lastDisplayed+")").attr("class").substr(0,1)=="p"){
        return "true";
    }else{
        return "false";
    }
}
