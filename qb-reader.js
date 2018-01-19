var question = "This countryʹs city of Valledupar [VYE-ay-doo-PAR] is the origin of the vallenato [vye-ay-NAH-toh] " +
    "style of folk music. The letter ʹCʹ in the CIVETS [SIH-vuts] bloc of emerging markets refers to this country. " +
    "In 2002 the politician Ingrid Betancourt [EENG-greed bet-tahn-KOR] was kidnapped in this country by a (*) " +
    "guerrilla group that signed a peace deal with president Juan Manuel Santos. For 10 points—name this South " +
    "American country in which the Marxist group FARC [fark] operated.";

$(document).ready(function(){
    console.log(process(cut(question)));
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
        starttag+="'>";
        // if(/*current is a (*) */){
        //
        // }
        theNewArray.push(starttag+array[i]+"</span>");
    }
    return theNewArray;
}