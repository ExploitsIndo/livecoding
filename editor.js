// JavaScript Document
// Create By DarkSideTeam|AlgiSec


// Munculkan Code Di tag iframe area
function RunCode(){
    		var CodeText = document.getElementById('TextEditor').value;
    		document.getElementById('result').srcdoc = CodeText;
}

// Ubah string textarea menjadi Base64_encode
function Encbase64(){
    		var Code   = document.getElementById('TextEditor').value;
    		if(Code == ''){
    			alert('Tidak Ada Karakter Yang Akan Diubah Cok!!');
    		}
    		var base64 = btoa(Code);	document.getElementById('TextEditor').value = base64;
}

// Sebaliknya
function Decbase64(){
	var Code   = document.getElementById('TextEditor').value;
	if(Code == ''){
    			alert('Tidak Ada Karakter Yang Akan Diubah Cok!!');
    		}
	var Unicode = atob(Code);
	document.getElementById('TextEditor').value = Unicode;
}

// Salin Code Di Textarea
function CopyCode(){
    		var copeh = document.getElementById("TextEditor").select();
			document.execCommand("copy");
			alert("Sukses");
}