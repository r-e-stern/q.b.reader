var question = "This countryʹs city of Valledupar [VYE-ay-doo-PAR] is the origin of the vallenato [vye-ay-NAH-toh] " +
    "style of folk music. The letter ʹCʹ in the CIVETS [SIH-vuts] bloc of emerging markets refers to this country. " +
    "In 2002 the politician Ingrid Betancourt [EENG-greed bet-tahn-KOR] was kidnapped in this country by a (*) " +
    "guerrilla group that signed a peace deal with president Juan Manuel Santos. For 10 points—name this South " +
    "American country in which the Marxist group FARC [fark] operated.";

$(document).ready(function(){
    console.log(process(question));
});

function process(string){
    var theArr = [];
    var start = 0;
    for(var i=0; i<string.length; i++){
        if(string.substring(i,i+1)==" "){
            //cut into words
        }
    }
}