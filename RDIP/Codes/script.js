
// English Sentences. 

var sentence1 = [["John ate an apple before afternoon","before afternoon John ate an apple","John before afternoon ate an apple"],
 ["some students like to study in the night", "at night some students like to study"],
 ["John and Mary went to church", "Mary and John went to church"],
 ["John went to church after eating", "after eating John went to church", "John after eating went to church"],
 ["did he go to market", "he did go to market"],
 ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman", "my sister who called the woman sells cosmetics"],
 ["John goes to the library and studies", "John studies and goes to the library"],
 ["John ate an apple so did she", "she ate an apple so did John"],
 ["the teacher returned the book after she noticed the error", "the teacher noticed the error after she returned the book", "after the teacher returned the book she noticed the error", "after the teacher noticed the error she returned the book", "she returned the book after the teacher noticed the error", "she noticed the error after the teacher returned the book", "after she returned the book the teacher noticed the error", "after she noticed the error the teacher returned the book"],
 ["I told her that I bought a book yesterday", "I told her yesterday that I bought a book", "yesterday I told her that I bought a book", "I bought a book that I told her yesterday", "I bought a book yesterday that I told her", "yesterday I bought a book that I told her"]];

// Hindi Sentences.

var sentence2 = [["राम और श्याम बाजार गयें", "राम और श्याम गयें बाजार", "बाजार गयें राम और श्याम", "गयें बाजार राम और श्याम"],
["राम सोया और श्याम भी", "श्याम सोया और राम भी", "सोया श्याम और राम भी", "सोया राम और श्याम भी"],
["मैंने उसे बताया कि राम सो रहा है", "मैंने उसे बताया कि सो रहा है राम", "उसे मैंने बताया कि राम सो रहा है", "उसे मैंने बताया कि सो रहा है राम", "मैंने बताया उसे कि राम सो रहा है", "मैंने बताया उसे कि सो रहा है राम", "उसे बताया मैंने कि राम सो रहा है", "उसे बताया मैंने कि सो रहा है राम", "बताया मैंने उसे कि राम सो रहा है", "बताया मैंने उसे कि सो रहा है राम", "बताया उसे मैंने कि राम सो रहा है", "बताया उसे मैंने कि सो रहा है राम"],
["राम खाकर सोया", "खाकर राम सोया", "राम सोया खाकर", "खाकर सोया राम", "सोया राम खाकर", "सोया खाकर राम"],
["बिल्लियों को मारकर कुत्ता सो गया", "मारकर बिल्लियों को कुत्ता सो गया", "बिल्लियों को मारकर सो गया कुत्ता", "मारकर बिल्लियों को सो गया कुत्ता", "कुत्ता सो गया बिल्लियों को मारकर", "कुत्ता सो गया मारकर बिल्लियों को", "सो गया कुत्ता बिल्लियों को मारकर", "सो गया कुत्ता मारकर बिल्लियों को"],
["एक लाल किताब वहाँ है", "एक लाल किताब है वहाँ", "वहाँ है एक लाल किताब", "है वहाँ एक लाल किताब"],
["एक बड़ी सी किताब वहाँ है", "एक बड़ी सी किताब है वहाँ", "बड़ी सी एक किताब वहाँ है", " बड़ी सी एक किताब है वहाँ", "वहाँ है एक बड़ी सी किताब", "वहाँ है बड़ी सी एक किताब", " है वहाँ एक बड़ी सी किताब", "है वहाँ बड़ी सी एक किताब"]];

var a;
var n;
var buttonlength, totalclicks;
var wordstring ="";
var ran;
var answers = document.getElementById("answerlist");
var anslist = "";
function intro(){
	document.getElementById("s3").innerHTML = "Introduction";
	document.getElementById("para1").innerHTML = "A sentence can become more complex, if more than one verb is present or by joining two sentences or words using conjunctions or by some other methods.";
	document.getElementById("para2").innerHTML = "<br>In this experiment also, you will make more difficult sentences using the given words.";
	document.getElementById("para11").innerHTML = "";
	document.getElementById("para22").innerHTML = "";
	document.getElementById("buttons").innerHTML = "";
	document.getElementById("dropdown").innerHTML = "";
	document.getElementById("san1").innerHTML = "";
	document.getElementById("san2").innerHTML = "";
	document.getElementById("reform").innerHTML = "";
	document.getElementById("checkcorrect").innerHTML = "";
	document.getElementById("fin").innerHTML = "";
	anslist = "";
	answers.innerHTML = "";
}
function viewtheory(){
	document.getElementById("s3").innerHTML = "Theory";
	document.getElementById("para1").innerHTML = "<u>Clause</u><br>A clause typically contains a subject noun phrase and a finite verb. Some languages allow subjects to be omitted. There are two types of subclauses:<ol><li>Independent clause</li><li>Subordinate clause</li></ol>Independent clause shows the complete meaning in it. For example: Ram eats. A subordinate clause is not a complete sentence. For example: because I am sick. Sentences can also be classified on the basis of clauses.";
	document.getElementById("para2").innerHTML = "<br>Classification on the basis of clauses are:<ol><li>A <b>Simple sentence</b> consists of only one independent clause. There are no subordinate clauses.</li><li>A <b>Compound sentence</b> consists of more than one independent clauses joined ny conjunctions or punctuations. There are no subordinate clauses.</li><li>A <b>Complex sentence</b> consists of atleast one indpendent clause and a single subordinate clause</li><li>A <b>Complex-compound </b>sentence consists of more than one independent clauses and atleast one of the independent clauses has one or more than one subordinate clauses</li></ol>";
	document.getElementById("para11").innerHTML = "";
	document.getElementById("para22").innerHTML = "";
	document.getElementById("buttons").innerHTML = "";
	document.getElementById("dropdown").innerHTML = "";
	document.getElementById("san1").innerHTML = "";
	document.getElementById("san2").innerHTML = "";
	document.getElementById("reform").innerHTML = "";
	document.getElementById("checkcorrect").innerHTML = "";
	document.getElementById("fin").innerHTML = "";
	anslist = "";
	answers.innerHTML = "";
}
function viewobjec(){
	document.getElementById("s3").innerHTML = "Objective";
	document.getElementById("para1").innerHTML = "<br><hr><br>The objective of this experiment is to know how to form logically correct sentences from the given words.";
	document.getElementById("para2").innerHTML = "<br><hr><br>";
	document.getElementById("para11").innerHTML = "";
	document.getElementById("para22").innerHTML = "";
	document.getElementById("buttons").innerHTML = "";
	document.getElementById("dropdown").innerHTML = "";
	document.getElementById("san1").innerHTML = "";
	document.getElementById("san2").innerHTML = "";
	document.getElementById("reform").innerHTML = "";
	document.getElementById("checkcorrect").innerHTML = "";
	document.getElementById("fin").innerHTML = "";
	anslist = "";
	answers.innerHTML = "";
}
function quizzes(){
	document.getElementById("s3").innerHTML = "Quizzes";
	document.getElementById("para1").innerHTML = "Which of these is a valid sentence?<ol><li>Ram came after lunch.</li><li>Ram came after having lunch.</li><li>Sleeping I saw a tiger.</li><li>I saw a sleeping tiger.</li><li>No Parking is allowed.</li></ol><br>";
	document.getElementById("para2").innerHTML = "<ol><li>खाते खाते राम सो गया</li><li>राम खाते खाते सो गया</li><li>राम खाता खाते सो गया</li><li>राम खाकर सो गया</li><li>राम और श्याम ने भी खाना खाया</li><li>राम ने और श्याम भी खाना खाया</li></ol>";
	document.getElementById("para11").innerHTML = "";
	document.getElementById("para22").innerHTML = "";
	document.getElementById("buttons").innerHTML = "";
	document.getElementById("dropdown").innerHTML = "";
	document.getElementById("san1").innerHTML = "";
	document.getElementById("san2").innerHTML = "";
	document.getElementById("reform").innerHTML = "";
	document.getElementById("checkcorrect").innerHTML = "";
	document.getElementById("fin").innerHTML = "";
	anslist = "";
	answers.innerHTML = "";
}
function toggleshow(){
	if(answers.style.display == 'none'){
		answers.style.display = "";
		document.getElementById("fin").innerHTML = "<center><font color ='red'>Wrong Answer!!!</font><br><button id='correctbut' onclick='hideanswerlist();'>Hide Correct Sentence</button></center>";
	}
}
function hideanswerlist(){
	document.getElementById("fin").innerHTML = "<center><font color ='red'>Wrong Answer!!!</font><br><button id='correctbut' onclick='toggleshow();'>Get Answers</button></center>";
	answers.style.display = "none";
}
function getanswerlist(){
	anslist = "";
	var total = 0;
	if(a == 'english'){
		total = sentence1[ran].length-1;
		document.getElementById("fin").innerHTML = "<center><font color ='red'>Wrong Answer!!!</font><br><button id='correctbut' onclick='hideanswerlist();'>Hide Correct Sentence</button></center>";
		for(i=0;i<=total;i++){
			anslist += "<center>"+sentence1[ran][i]+"<br></center>"
		}
		answers.innerHTML = anslist;
	}
	else if(a=='hindi'){
		total = sentence2[ran].length-1;
		document.getElementById("fin").innerHTML = "<center><font color ='red'>Wrong Answer!!!</font><br><button id='correctbut' onclick='hideanswerlist();'>Hide Correct Sentence</button></center>";
		for(i=0;i<=total;i++){
			anslist += "<center>"+sentence2[ran][i]+"<br></center>"
		}
		answers.innerHTML = anslist;
	}
}
function result(){
	var ws = wordstring.trim();
	var final;
	if(a=='english'){
		final = sentence1[ran].includes(ws);		
	}
	else if(a=='hindi'){
		final = sentence2[ran].includes(ws);
	}
	if(final)
		document.getElementById("fin").innerHTML = "<center><font color ='green'>Right Answer!!!</font><br><button id='correctbut'>Get Correct Sentence</button></center>";
	else
		document.getElementById("fin").innerHTML = "<center><font color ='red'>Wrong Answer!!!</font><br><button id='correctbut' onclick='getanswerlist();'>Get Correct Sentence</button></center>";
}
function reform(){
	var i = 0;
	while(i<=n){
		document.getElementById('button'+i).style.display = "";
		i++;
	}
	wordstring = "";
	document.getElementById("san2").innerHTML = wordstring;
	document.getElementById("reform").innerHTML = "";
	document.getElementById("san1").innerHTML = "";
	document.getElementById("checkcorrect").innerHTML = "";
	document.getElementById("fin").innerHTML = "";
	totalclicks = 0;
	anslist = "";
	answers.innerHTML = "";
}
function answer(id,value){
	document.getElementById("san2").style.textAlign = "center";
	document.getElementById("san1").style.textAlign = "center"; 
	document.getElementById("san1").style.color = "darkblue";
	document.getElementById("san1").innerHTML = "<font color='darkblue'><b>Formed Sentence</b></font><font color='blue'> <i>(after selecting words)</i>:</font>";
	wordstring += value ;
	wordstring += " ";
	document.getElementById("san2").innerHTML = wordstring;
	document.getElementById(id).style.display = "none";
	document.getElementById("reform").innerHTML = "<center><button id='re' onclick='reform();'>Re-form the Sentence</button></center>";
	totalclicks ++;
	if(totalclicks == buttonlength){
		document.getElementById("checkcorrect").innerHTML = "<center><button id='crct' onclick='result();'>Check the correctness of the sentence</button></center>";
	}
}
function dropexp(){
    a = document.getElementById('drop').value;
	if(a == 'select'){
		buttonlength = 0;
		totalclicks = 0;
		anslist = "";
		answers.innerHTML = "";
		document.getElementById("para1").innerHTML = "";
		document.getElementById("para2").innerHTML = "";
		document.getElementById("para11").innerHTML = "";
		document.getElementById("para22").innerHTML = "";
		document.getElementById("buttons").innerHTML = "";
		document.getElementById("san1").innerHTML = "";
		document.getElementById("san2").innerHTML = "";
		document.getElementById("reform").innerHTML = "";
		document.getElementById("checkcorrect").innerHTML = "";
		document.getElementById("fin").innerHTML = "";
	}
	if(a == 'english'){
		wordstring = "";
		anslist = "";
		answers.innerHTML = "";
		document.getElementById("fin").innerHTML = "";
		document.getElementById("san1").innerHTML = "";
		document.getElementById("san2").innerHTML = "";
		document.getElementById("reform").innerHTML = "";
		document.getElementById("checkcorrect").innerHTML = "";
		document.getElementById("para11").style.color = "darkblue";
		document.getElementById("para11").style.textAlign = "center";
		document.getElementById("para22").style.color = "blue";
		document.getElementById("para22").style.textAlign = "center";
		document.getElementById("para11").innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>";
		document.getElementById("para22").innerHTML = "<i>(select the buttons in proper order)</i>";
	    ran = Math.floor(Math.random() * 9);
		var sent = sentence1[ran][0];
		var shuf = sent.split(" ");
	    x = shuf.length;
	    n = shuf.length-1;
	    var  temp, sp;
		while(0!==x){
			sp = Math.floor(Math.random()*x);
			x -= 1;
			temp = shuf[x];
			shuf[x] = shuf[sp];
			shuf[sp] = temp;
		}
		var i=0;
		var finalbtns="";
		var btns="";
		var content;
		buttonlength = 0;
		totalclicks = 0;
		while(i<=shuf.length-1){
			content = shuf[i];
			btns = "<button id='button"+i+"'onclick='answer(this.id,this.value)' value='"+content+"'>"+content+"</button> &nbsp;&nbsp;";
			finalbtns += btns;
			i++;
			buttonlength++;
		}
		document.getElementById("buttons").style.textAlign = "center";
		document.getElementById("buttons").innerHTML = finalbtns;
		
		
	}
	if(a == 'hindi'){
		wordstring = "";
		anslist = "";
		answers.innerHTML = "";
		document.getElementById("fin").innerHTML = "";
		document.getElementById("checkcorrect").innerHTML = "";
		document.getElementById("san1").innerHTML = "";
		document.getElementById("san2").innerHTML = "";
		document.getElementById("reform").innerHTML = "";
		document.getElementById("para11").style.color = "darkblue";
		document.getElementById("para11").style.textAlign = "center";
		document.getElementById("para22").style.color = "blue";
		document.getElementById("para22").style.textAlign = "center";
		document.getElementById("para11").innerHTML = "<br><br><b>Form a sentence (Declarative or Interrogative or any other type) from the given words</b>";
		document.getElementById("para22").innerHTML = "<i>(select the buttons in proper order)</i>";
	    ran = Math.floor(Math.random() * 6);
		var sent = sentence2[ran][0];
		var shuf = sent.split(" ");
		x = shuf.length;
		n = shuf.length-1;
	    var  temp, sp;
		while(0!==x){
			sp = Math.floor(Math.random()*x);
			x -= 1;
			temp = shuf[x];
			shuf[x] = shuf[sp];
			shuf[sp] = temp;
		}
		var i=0;
		var finalbtns="";
		var btns="";
		var content;
		buttonlength = 0;
		totalclicks = 0;
		while(i<=shuf.length-1){
			content = shuf[i];
			btns = "<button id='button"+i+"' onclick='answer(this.id,this.value)' value='"+content+"'>"+content+"</button> &nbsp;&nbsp;";
			finalbtns += btns;
			i++;
			buttonlength++;
		}
		document.getElementById("buttons").style.textAlign = "center";
		document.getElementById("buttons").innerHTML = finalbtns;			
	}
}
function experiment(){
	document.getElementById("s3").innerHTML = "Experiment";
	document.getElementById("dropdown").innerHTML = "<select id='drop' onchange='dropexp();'><option value='select'>---Select Language--- </option><option value='english'>English</option><option value='hindi'>Hindi</option></select>"; 
	document.getElementById("para1").innerHTML = "";
	document.getElementById("para2").innerHTML = "";
	document.getElementById("para11").innerHTML = "";
	document.getElementById("para22").innerHTML = "";
	document.getElementById("san1").innerHTML = "";
	document.getElementById("san2").innerHTML = "";
	document.getElementById("reform").innerHTML = "";
	document.getElementById("checkcorrect").innerHTML = "";
	document.getElementById("fin").innerHTML = "";
	anslist = "";
	answers.innerHTML = "";
}
function procedure(){
	document.getElementById("s3").innerHTML = "Procedure";
	document.getElementById("para1").innerHTML = "<u><b>STEP 1:</b></u> Select a language which you know better<br><u><b>STEP 2:</b></u> Select the buttons which has words written on it, in a proper order<br><u><b>OUTPUT:</b></u> Group of words in a selected order will be shown";
	document.getElementById("para2").innerHTML = "<u><b>NOTE:</b></u><br><ol><li>If a wrong sentence is formed,<button> Re-form the sentence </button> is available for re-setting.</li><li>You can check whether the formed sentence is a valid or not by clicking <button> Check the correctness of this sentence  </button></li><li>For a wrong sentence, you can get the correct sentence by clicking <button> Get correct sentence</button></li></ol>";
	document.getElementById("para11").innerHTML = "";
	document.getElementById("para22").innerHTML = "";
	document.getElementById("buttons").innerHTML = "";
	document.getElementById("dropdown").innerHTML = "";
	document.getElementById("san1").innerHTML = "";
	document.getElementById("san2").innerHTML = "";
	document.getElementById("reform").innerHTML = "";
	document.getElementById("checkcorrect").innerHTML = "";
	document.getElementById("fin").innerHTML = "";
	anslist = "";
	answers.innerHTML = "";
}
