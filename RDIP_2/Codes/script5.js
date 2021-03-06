var s;
var words;
var tagger;
var taggedWords;
var array = [];
var sent; 
var str;
var count, f=0;
var anslist;

var n = ["NN","NNP","NNPS","NNS"];
var p = ["PRP$","PRP","WP"];
var v = ["VB","VBD","VBG","VBN","VBP","VBZ"];
var adj = ["JJ","JJS","JJR"];
var adv = ["RB","RBR","RBS","WRB"];
var det = ["DT","PDT","WDT"];
var pre = ["IN"];
var conj = ["CC"];
var int = ["UH"];

var corpus = [["The child liked the chocolate.","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots."],
          ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"]];

////////////

var pos = require('pos');
//var tagger = new pos.Tagger();
//var taggedWords = tagger.tag(words);
//for (i in taggedWords) {
    //var taggedWord = taggedWords[i];
    //var word = taggedWord[0];
    //var tag = taggedWord[1];
   // console.log(word + " /" + tag);
//}

/////////////

function clearscreen(){
	document.getElementById("s3").innerHTML = "";
	document.getElementById("dropdown1").innerHTML = "";
	document.getElementById("dropdown2").innerHTML = "";
	document.getElementById("para1").innerHTML = "";
	document.getElementById("para21").innerHTML = "";
	document.getElementById("para3").innerHTML = "";
	document.getElementById("para4").innerHTML = "";
	document.getElementById("para5").innerHTML = "";
	document.getElementById("para6").innerHTML = "";
	document.getElementById("para7").innerHTML = "";
	document.getElementById("para8").innerHTML = "";
}
function intro(){
	document.getElementById("s3").innerHTML = "Introduction";
	document.getElementById("para1").innerHTML = "Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus. The basic parts of speech are : Noun, Verb, Determiner, Adjective, Adverb, Preposition (in English), Postposition (in Hindi).";
	document.getElementById("image").style.display = "";
}
function viewtheory(){
	document.getElementById("image").style.display = "none";
	document.getElementById("s3").innerHTML = "Theory";
	document.getElementById("para21").innerHTML = '"Parts of speech" are the basic lexical categories of the words present in a language. It is very important to understand these, in order to understand the grammar and use of the language concerned.';
	document.getElementById("para3").innerHTML = "Eg:<ul><li>Ram(Noun) ate(Verb) an(Determiner) apple(Noun) with(Preposition) a(Article) fork(Noun).</li><li>राम(Noun) ने(Postposition) चम्मच(Noun) से(Postposition) मिठाई(Noun) खाई(Verb).</li></ul>";	
	document.getElementById("para4").innerHTML = "Each part of speech explains how the word is used. In fact, the same word can act as different parts of speechs depending on the context.<br>";
	document.getElementById("para5").innerHTML = "Eg: A noun in one sentence and an adjective in the next.<ul><li>The glass was broken(Verb).</li><li>The broken(Adjective) glass pierced her flesh.</li></ul>";
	document.getElementById("para6").innerHTML = "Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus.";
	document.getElementById("para7").innerHTML = "<center><table id='table1'><tr><th> POS </th><th> Function </th><th> Example </th></tr><tr><td>Verb</td><td>action or state</td><td> take, eat, है, सोना, गया  </td></tr><tr><td> Noun</td><td>naming word; person or thing </td><td> table, John, honesty, राम, कुर्सी, हिम्मत  </td></tr><tr></tr><tr><td>Pronoun</td><td>replaces noun</td><td> he, she, you, मैं, वह  </td></tr><tr><td> Determiner </td><td>occurs before noun or noun phrase</td><td> the, many, all </td></tr><tr><td> Adjective </td><td> describes noun </td> <td> green, big, छोटा, सुन्दर, काला </td></tr><tr><td> Adverb </td><td> describes verb</td> <td> naturally, slowly,धीरे, जल्दी  </td></tr><tr><td> Preposition</td><td>joins noun to other POS</td><td> in,of, about </td></tr><tr><td> Postposition</td><td>joins noun to other POS</td><td> में, से, के लिए   </td></tr><tr><td> Conjunction</td><td> joins two words, phrases, sentences</td><td> but, so, और, या </td></tr><tr><td> Interjection</td><td>express emotion or surprise followed by exclamation marks</td> <td> Hello!, Hurray!, वाह! </td></tr></table></center>";
}
function viewobjec(){
	document.getElementById("image").style.display = "none";
	document.getElementById("s3").innerHTML = "Objective";
	document.getElementById("para3").innerHTML = "<br><hr><br><br>The objective of this experiment is to test the knowledge of basic part of speech of words as they appear in a sentence.";
	document.getElementById("para4").innerHTML = "<br><hr><br>";
}
function toggle(){
    document.getElementById("para8").innerHTML = "<br><center><button id='ansget' onclick='showans();'>Get Answers</button></center>";
    i = 0;
    while(i < array.length){
        document.getElementById("ansrow"+i).innerHTML = "";
        i++;
    }
}
function showans(){
    if(s == 'english'){
        i=0;
        while(i < array.length){
            if(n.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Noun"
            }
            if(p.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Pronoun"
            }
            if(v.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Verb"
            }
            if(adj.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Adjective"
            }
            if(adv.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Adverb"
            }
            if(det.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Determiner"
            }
            if(pre.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Preposition"
            }
            if(conj.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Conjunction"
            }
            if(int.includes(anslist[i])){
                document.getElementById('ansrow'+i).innerHTML = "Interjection"
            }
            i++;
        }
    }
    if(s == 'hindi'){
        i=0;
        while(i<array.length){
            document.getElementById('ansrow'+i).innerHTML = anslist[i]; 
            i++;       
        }
    }
    document.getElementById("para8").innerHTML = "<br><center><button id='ansget' onclick='toggle();'>Hide Answers</button></center>";
}
function correctness(selopt,tg){
	if(selopt == "noun"){
        if(tg == "NN" || tg == "NNP" || tg == "NNPS" || tg == "NNS" ){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "pronoun"){
        if(tg == "PRP$" || tg == "PRP" || tg == "WP"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "verb"){        
        if(tg == "VB" || tg == "VBD" || tg == "VBG" || tg == "VBN" || tg == "VBP" || tg == "VBZ"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "adjective"){
        if(tg == "JJ" || tg == "JJS" || tg == "JJR"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "adverb"){
        if(tg == "RB" || tg == "RBR" || tg == "RBS" || tg == "WRB"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "determiner"){
        if(tg == "DT" || tg == "PDT" || tg == "WDT"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "preposition"){
        if(tg == "IN"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "conjunction"){
        if(tg == "CC"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tick'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
    else if(selopt == "interjection"){
        if(tg == "UH"){
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            count++;
        }
        else{
            document.getElementById('tk'+i).innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
        }
    }
}
function check(){
	var selopt;
    if(s == 'english'){
        count = 0;
        anslist = [];
        selopt = "";
        words = new pos.Lexer().lex(str);
        tagger = new pos.Tagger();
        taggedWords = tagger.tag(words);
        var j=0;
        array = str.split(" ");
        if(str.charAt(str.length-1) == "."){
            taggedWords.pop();
            for( i in taggedWords){
                taggedWord = taggedWords[i];
                word = taggedWord[0];
                tg = taggedWord[1];
                if(j < array.length){
                    selopt = document.getElementById("x"+j).value; 
                    anslist[i] = tg;
                    correctness(selopt,tg);
                    j++;
                }
            }
        } 
        else{
            for(i in taggedWords){
                taggedWord = taggedWords[i];
                word = taggedWord[0];
                tg = taggedWord[1];
                selopt = document.getElementById("x"+i).value;
                anslist[i] = tg;  
                correctness(selopt,tg);
            }
        }
    }
    if(s == 'hindi'){
        count = 0;
        selopt = "";
        array = str.split(" ");
        anslist = [];
        if(sent == 'hin1'){
            count = 0;
            anslist = ["Noun","Postposition","Noun","Postposition","Postposition","Noun","Verb"];
            selopt = document.getElementById("x0").value;
            if(selopt == 'noun'){
                count++;
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x1').value;
            if(selopt == 'postposition'){
                count++;
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x2').value;
            if(selopt == 'noun'){
                count++;
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x3').value;
            if(selopt == 'postposition'){
                count++;
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x4').value;
            if(selopt == 'postposition'){
                count++;
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x5').value;
            if(selopt == 'noun'){
                count++;
                document.getElementById('tk5').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk5').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x6').value;
            if(selopt == 'verb'){
                count++;
                document.getElementById('tk6').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk6').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }
        }

        if(sent == 'hin2'){
            count = 0;
            anslist = ["Adjective","Noun","Noun","Adverb","Verb"];
            selopt = document.getElementById('x0').value;
            if(selopt == 'adjective'){
                count++;
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x1').value;
            if(selopt == 'noun'){
                count++;
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x2').value;
            if(selopt == 'noun'){
                count++;
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x3').value;
            if(selopt == 'adverb'){
                count++;
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x4').value;
            if(selopt == 'verb'){
                count++;
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }
        }
        if(sent == "hin3"){
            count = 0;
            anslist = ["Noun","Postposition","Noun","Adjective","Verb","Verb"];
            selopt = document.getElementById('x0').value;
            if(selopt == 'noun'){
                count++;
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x1').value;
            if(selopt == 'postposition'){
                count++;
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x2').value;
            if(selopt == "noun"){
                count++;
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }
            
            selopt = document.getElementById('x3').value;
            if(selopt == 'adjective'){
                count++;
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x4').value;
            if(selopt == 'verb'){
                count++;
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x5').value;
            if(selopt == 'verb'){
                count++;
                document.getElementById('tk5').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk5').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }
            }

            if(sent == "hin4"){
            count = 0;
            anslist = ["Interjection","Pronoun","Adjective","Verb"];
            selopt = document.getElementById('x0').value;
            if(selopt == 'interjection'){
                count++;
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x1').value;
            if(selopt == 'pronoun'){
                count++;
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x2').value;
            if(selopt == 'adjective'){
                count++;
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x3').value;
            if(selopt == "verb"){
                count++;
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }
            }

            if(sent == "hin5"){
            count = 0;
             anslist = ["Noun","Postposition","Noun","Verb","Verb"];
            selopt = document.getElementById('x0').value;
            if(selopt == "noun"){
                count++;
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk0').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x1').value;
            if(selopt == "postposition"){
                count++;
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk1').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x2').value;
            if(selopt == "noun"){
                count++;
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk2').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x3').value;
            if(selopt == "verb"){
                count++;
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk3').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }

            selopt = document.getElementById('x4').value;
            if(selopt == "verb"){
                count++;
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/right.png' alt='Correct' width='30px' height='30px'>";
            }
            else{
                document.getElementById('tk4').innerHTML = "<img class='ans' src='../../src/lab/exp7/wrong.png' alt='Wrong' width='30px' height='30px'>";
            }
        }
    }
    if(count != array.length){
        f++;
        document.getElementById("para8").innerHTML = "<br><center><button id='ansget' onclick='showans();'>Get Answers</button></center>";
    }
    else{
        if(f == 0)
            document.getElementById("para8").innerHTML = "";
    }
}
function creation(str1){
   document.getElementById("para8").innerHTML = "";
    str = "";
    document.getElementById("para5").innerHTML = "";
    var line = "";
    var corpusarray = "";
    str = str1;
    corpusarray = str.split(" ");
    var l = corpusarray.length;
    if(s == 'english'){
        line = "";
        i = 0;
        while(i<l){
            line += "<tr><td>"+corpusarray[i]+"</td><td><select id='x"+i+"'><option value='noun' selected>Noun </option><option value='pronoun'>Pronoun</option><option value='verb'>Verb</option><option value='adjective'>Adjective</option><option value='adverb'>Adverb</option><option value='determiner'>Determiner</option><option value='preposition'>Preposition</option><option value='conjunction'>Conjunction</option><option value='interjection'>Interjection</option></select></td><td id=tk"+i+" width='60px'></td><td width='40px' id='ansrow"+i+"'></td></tr>"; 
            i++;
        }
    }
    else if(s == 'hindi'){
        line = "";
        i=0;
        while(i<l){
            line += "<tr><td>"+corpusarray[i]+"</td><td><select id='x"+i+"'><option value='noun' selected>Noun </option><option value='pronoun'>Pronoun</option><option value='verb'>Verb</option><option value='adjective'>Adjective</option><option value='adverb'>Adverb</option><option value='postposition'>Postposition</option><option value='conjunction'>Conjunction</option><option value='interjection'>Interjection</option></select></td><td id=tk"+i+" width='60px'></td><td width='40px' id='ansrow"+i+"'></td></tr>";
            i++;
        }
    }
    document.getElementById("para5").innerHTML = "<center><table><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr>" + line + "</table></center>";
    document.getElementById("para6").innerHTML = "<center><br><button id='submit1' onclick='check();'>Submit</button></center>";
}
function displaytable(id){
	document.getElementById("para4").innerHTML = "<center><i><font color='Blue'>Select the POS tag for corresponding words</font></i></center>";
    sent = "";
    if(id == 'englishdrop'){
        document.getElementById("para8").innerHTML = "";
        sent = document.getElementById(id).value;
        if(sent == 'sen1'){
            creation(corpus[0][0]);
        }
        if(sent == 'sen2'){
            creation(corpus[0][1]);
        }
        if(sent == 'sen3'){
            creation(corpus[0][2]);
        }
        if(sent == 'sen4'){
            creation(corpus[0][3]);
        }
        if(sent == 'sen5'){
            creation(corpus[0][4]);
        }
    }
    if(id == 'hindidrop'){
        document.getElementById("para8").innerHTML = "";
        sent = document.getElementById(id).value;
        if(sent == 'hin1'){
            creation(corpus[1][0]);
        }
        if(sent == 'hin2'){
            creation(corpus[1][1]);
        }
        if(sent == 'hin3'){
            creation(corpus[1][2]);
        }
        if(sent == 'hin4'){
            creation(corpus[1][3]);
        }
        if(sent == 'hin5'){
            creation(corpus[1][4]);
        }
    }
}
function droplang(){
    s = "";
    s = document.getElementById("drop1").value;
    if(s == 'select1'){
        alert("Please select any language");
        document.getElementById("dropdown2").innerHTML = "";
    }
    if(s == 'english'){
        document.getElementById("para8").innerHTML = "";
        document.getElementById("para5").innerHTML = "";
        document.getElementById("para6").innerHTML = "";
        document.getElementById("para4").innerHTML = "";
        document.getElementById("dropdown2").innerHTML = "<select id='englishdrop' onchange='displaytable(this.id);'><option value='select2'>---Select a sentence--- </option><option value='sen1'>"+corpus[0][0]+"</option><option value='sen2'>"+corpus[0][1]+"</option><option value='sen3'>"+corpus[0][2]+"</option><option value='sen4'>"+corpus[0][3]+"</option><option value='sen5'>"+corpus[0][4]+"</option></select>";
    }
    if(s == 'hindi'){
        document.getElementById("para8").innerHTML = "";
        document.getElementById("para5").innerHTML = "";
        document.getElementById("para6").innerHTML = "";
        document.getElementById("para4").innerHTML = "";
        document.getElementById("dropdown2").innerHTML = "<select id='hindidrop' onchange='displaytable(this.id);'><option value='select3'>---Select a sentence--- </option><option value='hin1'>"+corpus[1][0]+"</option><option value='hin2'>"+corpus[1][1]+"</option><option value='hin3'>"+corpus[1][2]+"</option><option value='hin4'>"+corpus[1][3]+"</option><option value='hin5'>"+corpus[1][4]+"</option></select>";
    }
}
function experiment(){
	document.getElementById("image").style.display = "none";
	document.getElementById("s3").innerHTML = "Experiment";
	document.getElementById("dropdown1").innerHTML = "<select id='drop1' onchange='droplang();'><option value='select1'>---Select Language--- </option><option value='english'>English </option><option value='hindi'>Hindi </option></select>"; 
}
function quizzes(){
	document.getElementById("image").style.display = "none";
	document.getElementById("s3").innerHTML = "Quizzes";
	document.getElementById("para21").innerHTML = "<b>Assign POS tag to each word in the following sentences</b>";
	document.getElementById("para3").innerHTML = "<ol><li>Heat water in a large vessel.</li><li>The dog is happy.</li><li>The happy dog.</li><li>Park the car near the park.</li><li>The dog is sitting just at the gate.</li></ol>";
	document.getElementById("para4").innerHTML = "<br><ol><li>बहार जाओ</li><li>गाड़ी उद्द्यान में खड़ी करो</li><li>राम खाना खाकर सो गया</li><li>राम खाते खाते सो गया</li><li>राम ने खाते खाते खाता खुलवाया</li></ol>";
}
function procedure(){
	document.getElementById("image").style.display = "none";
    document.getElementById("s3").innerHTML = "Procedure";
    document.getElementById("para3").innerHTML = "<u><b>STEP1:</b></u>  Select a language from the drop down menu.<br><u><b>STEP2:</b></u> Select a sentence from the drop down menu.<br><u><b>STEP3:</b></u> Select corresponding POS for each word in the sentence and and click the <button>Submit</button> button. <br><u><b>OUTPUT1:</b></u> The submitted answer will be checked.<br><u><b>STEP4:</b></u> If incorrect, click on <button>Get Answer</button> button for the correct answer or repeat STEP3.<br><br><hr> ";
}
function furtherreading(){
	document.getElementById("image").style.display = "none";
	document.getElementById("s3").innerHTML = "Further Readings";
	document.getElementById("para1").innerHTML = "<center><b>Hindi</b><br>-Yamuna Kachru<br>Chapter 6</center>";
	document.getElementById("para21").innerHTML = "<center><b>A Student's Introduction To English Grammar</b><br>- Rodney D. Huddleston<br>Chapter 6</center>";
}