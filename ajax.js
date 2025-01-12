function buatPost() {
    var content = document.getElementById("content").value;
    if(content.trim() == ""){
        alert("Post Content cannot be empty");
        return ; 
    }
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "submitpost.php",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded" );
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            ambilPost();
            document.getElementById("content").value = "";
        }
    }
}

function ambilPost() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","getpost.php",true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            document.getElementById("post-content").innerHTML = xhr.responseText ;
        }
    }
}

function hapusPost(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","deletepost.php?id="+id,true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            ambilPost();
        }
    };
    xhr.send();
}

function likePost(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","likepost.php?id="+ encodeURIComponent(id),true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            ambilPost();
        }
    }
}

function unlikePost(id) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","unlikepost.php?id="+ encodeURIComponent(id),true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            ambilPost();
        }
    }
}
