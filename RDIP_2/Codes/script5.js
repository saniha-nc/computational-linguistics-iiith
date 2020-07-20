var s;
var corpus = [["The child liked the chocolate","She was stopped by the bravest knight.","Mary baked a cake for his birthday","She decorated the cake carefully","Mary wore a dress with polka dots"],
          ["राम ने सीता के लिए फल तोड़ा।","छोटे बच्चे पाठशाला जल्दी आयेंगे।","मेहनत का फल मीठा होता है।","वाह! वह खूबसूरत है।","पेड़ से पत्ते गिर गए।"]];

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
function creation(str){
	document.getElementById("para5").innerHTML = "";
	var line = "";
	var corpusarray = "";
	corpusarray = str.split(" ");
	var l = corpusarray.length;
	if(s == 'english'){
		line = "";
		for(i=0; i<l; i++){
			line += "<tr><td>"+corpusarray[i]+"</td><td><select><option value='noun' selected>Noun </option><option value='pronoun'>Pronoun</option><option value='adjective'>Adjective</option><option value='adverb'>Adverb</option><option value='determiner'>Determiner</option><option value='proposition'>Preposition</option><option value='conjunction'>Conjunction</option><option value='interjection'>Interjection</option></select></td><td></td><td></td></tr>"; 
		}
	}
	else if(s == 'hindi'){
		line = "";
		for(i=0; i<l; i++){
			line += "<tr><td>"+corpusarray[i]+"</td><td><select><option value='noun' selected>Noun </option><option value='pronoun'>Pronoun</option><option value='adjective'>Adjective</option><option value='adverb'>Adverb</option><option value='proposition'>Preposition</option><option value='conjunction'>Conjunction</option><option value='interjection'>Interjection</option></select></td><td></td><td></td></tr>"; 
		}
	}
	document.getElementById("para5").innerHTML = "<center><table><tr><th>LEXICON</th><th>POS</th><th></th><th></th></tr><tr></td></tr>" + line + "</table></center>";
	document.getElementById("para6").innerHTML = "<center><br><button id='submit1'>Submit</button></center>";
}
function displaytable(id){
	document.getElementById("para4").innerHTML = "<center><i><font color='Blue'>Select the POS tag for corresponding words</font></i></center>";
	var sent = "";
	if(id == 'englishdrop'){
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
		document.getElementById("para5").innerHTML = "";
		document.getElementById("para6").innerHTML = "";
		document.getElementById("para4").innerHTML = "";
		document.getElementById("dropdown2").innerHTML = "<select id='englishdrop' onchange='displaytable(this.id);'><option value='select2'>---Select a sentence--- </option><option value='sen1'>The child liked the chocolate. </option><option value='sen2'>She was stopped by the bravest knight. </option><option value='sen3'>Mary baked a cake for his birthday.</option><option value='sen4'>She decorated the cake carefully.</option><option value='sen5'>Mary wore a dress with polka dots.</option></select>";
	}
	if(s == 'hindi'){
		document.getElementById("para5").innerHTML = "";
		document.getElementById("para6").innerHTML = "";
		document.getElementById("para4").innerHTML = "";
		document.getElementById("dropdown2").innerHTML = "<select id='hindidrop' onchange='displaytable(this.id);'><option value='select3'>---Select a sentence--- </option><option value='hin1'>राम ने सीता के लिए फल तोड़ा।</option><option value='hin2'>छोटे बच्चे पाठशाला जल्दी आयेंगे।</option><option value='hin3'>मेहनत का फल मीठा होता है।</option><option value='hin4'>वाह! वह खूबसूरत है।</option><option value='hin5'>पेड़ से पत्ते गिर गए।</option></select>";
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
	document.getElementById("para3").innerHTML = "<u><b>STEP1:</b></u>  Select a language from the drop down menu.<br><u><b>STEP2:</b></u> Select a sentence from the drop down menu.<br><u><b>STEP3:</b></u> Select corresponding POS for each word in the sentence and and click the <button>Submit</button> button. <br><u><b>OUTPUT1:</b></u>The submitted answer will be checked.<br><u><b>STEP4:</b></u> If incorrect, click on <button>Get Answer</button> button for the correct answer or repeat STEP3. ";
}
function furtherreading(){
	document.getElementById("image").style.display = "none";
	document.getElementById("s3").innerHTML = "Further Readings";
	document.getElementById("para1").innerHTML = "<center><b>Hindi</b><br>-Yamuna Kachru<br>Chapter 6</center>";
	document.getElementById("para21").innerHTML = "<center><b>A Student's Introduction To English Grammar</b><br>- Rodney D. Huddleston<br>Chapter 6</center>";
}