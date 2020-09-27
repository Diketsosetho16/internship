function infofunc(e, info) {
    var i, content, links;
    content = document.getElementsByClassName("description");
    for (i = 0; i < content.length; i++) {
       content[i].style.display = "none";
    }
    links = document.getElementsByClassName("menu");
    for (i = 0; i < links.length; i++) {
       links[i].className = links[i].className.replace(" active", "");
    }
    document.getElementById(info).style.display = "block";
    e.currentTarget.className += " active";
 }
 document.getElementById("active").click();