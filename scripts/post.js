var myInput = document.getElementById("get_pink");
var other = document.getElementById("all_data");
var b1 =  document.getElementById("edit_button");
var b2 =  document.getElementById("save_button");
function borders() {
  if (myInput.style.border == "") {
    myInput.style.border = "2px solid pink";
    other.style.border = "2px solid #483d8b";
    b1.innerHTML="Save <i class='fa fa-save'></i>";
    myInput.contentEditable= 'true';
    other.contentEditable= 'true';
  } else {
    myInput.style.border = "";
    other.style.border = "";
    b1.innerHTML="Edit <i class='fa fa-edit'></i>";
    myInput.contentEditable= 'false';
    other.contentEditable= 'false';
  }
}

var p = document.getElementById("count");
var b3 = document.getElementById("likes");
var count = 0;
function thu(){
    count += 1;
    b3.innerHTML= '<i class="fa fa-thumbs-up" aria-hidden="true"></i>' + " Liked!";
    p.innerHTML = count + " Person Likes This!";
}


  function adding() {
    var comment= document.getElementById('c_content').value;

    var n = document.createElement("div");
    n.innerHTML ="<br>"
    n.style.backgroundColor="white";
    n.style.margin="10px 10px 10px 10px";
    n.style.padding="0 20px 20px 10px";
    n.style.wordBreak="break-word";
    var textnode = document.createTextNode(comment);
    n.appendChild(textnode);
    document.getElementById("c_content").value = "";
    if (comment===""){
        alert("No comment added......");
    }
    else{
        var a = document.getElementById("box");
        a.insertBefore(n, a.childNodes[0]); 
    }       
}
var modalA = document.getElementById('id01');

var modal = document.getElementById('id02');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } 
  if(event.target == modalA) {
        modalA.style.display = "none";      
     }
}