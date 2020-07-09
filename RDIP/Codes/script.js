
// English Sentences. 

var sentence1 = ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"];
var sentence2 = ["some students like to study in the night", "at night some students like to study"];
var sentence3 = ["John and Mary went to church", "Mary and John went to church"];
var sentence4 = ["John went to church after eating", "after eating John went to church", "John after eating went to church"];
var sentence5 = ["did he go to market", "he did go to market"];
var sentence6 = ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"];
var sentence7 = ["John goes to the library and studies", "John studies and goes to the library"];
var sentence8 = ["John ate an apple so did she", "she ate an apple so did John"];
var sentence9 = ["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"];
var sentence10 = ["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her"];

// Hindi Sentences.

var sentence11 = ["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"];
var sentence12 = ["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"];
var sentence13 = ["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"];
var sentence14 = ["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"];
var sentence15 = ["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"];
var sentence16 = ["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"];
var sentence17 = ["एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", " बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", " है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"];

function viewtheory(){
	document.getElementById("s3").innerHTML = "Theory";
	document.getElementById("para1").innerHTML = "<u>Clause</u><br>A clause typically contains a subject noun phrase and a finite verb. Some languages allow subjects to be omitted. There are two types of subclauses:<ol><li>Independent clause</li><li>Subordinate clause</li></ol>Independent clause shows the complete meaning in it. For example: Ram eats. A subordinate clause is not a complete sentence. For example: because I am sick. Sentences can also be classified on the basis of clauses.";
	document.getElementById("para2").innerHTML = "<br>Classification on the basis of clauses are:<ol><li>A <b>Simple sentence</b> consists of only one independent clause. There are no subordinate clauses.</li><li>A <b>Compound sentence</b> consists of more than one independent clauses joined ny conjunctions or punctuations. There are no subordinate clauses.</li><li>A <b>Complex sentence</b> consists of atleast one indpendent clause and a single subordinate clause</li><li>A <b>Complex-compound </b>sentence consists of more than one independent clauses and atleast one of the independent clauses has one or more than one subordinate clauses</li></ol>";
}
function viewobjec(){
	document.getElementById("s3").innerHTML = "Objective";
	document.getElementById("para1").innerHTML = "<br><hr><br>The objective of this experiment is to know how to form logically correct sentences from the given words.";
	document.getElementById("para2").innerHTML = "<br><hr><br>";
}
function quizzes(){
	document.getElementById("s3").innerHTML = "Quizzes";
	document.getElementById("para1").innerHTML = "Which of these is a valid sentence?<ol><li>Ram came after lunch.</li><li>Ram came after having lunch.</li><li>Sleeping I saw a tiger.</li><li>I saw a sleeping tiger.</li><li>No Parking is allowed.</li></ol><br>";
	document.getElementById("para2").innerHTML = "<ol><li>खाते खाते राम सो गया</li><li>राम खाते खाते सो गया</li><li>राम खाता खाते सो गया</li><li>राम खाकर सो गया</li><li>राम और श्याम ने भी खाना खाया</li><li>राम ने और श्याम भी खाना खाया</li></ol>";
}
function experiment(){
	document.getElementById("s3").innerHTML = "Experiment";
	document.getElementById("para1").innerHTML = ""; 
	document.getElementById("para2").innerHTML = "";
}
function procedure(){
	document.getElementById("s3").innerHTML = "Procedure";
	document.getElementById("para1").innerHTML = "<u><b>STEP 1:</b></u> Select a language which you know better<br><u><b>STEP 2:</b></u> Select the buttons which has words written on it, in a proper order<br><u><b>OUTPUT:</b></u> Group of words in a selected order will be shown";
	document.getElementById("para2").innerHTML = "<u><b>NOTE:</b></u><br><ol><li>If a wrong sentence is formed,<button> Re-form the sentence </button> is available for re-setting.</li><li>You can check whether the formed sentence is a valid or not by clicking <button> Check the correctness of this sentence  </button></li><li>For a wrong sentence, you can get the correct sentence by clicking <button> Get correct sentence</button></li></ol>";
}
