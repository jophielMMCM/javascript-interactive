function upDate(previewPic){
    console.log("upDate success!");
    console.log("Source: " + previewPic.src);
    console.log("Alt text: " + previewPic.alt);
    var img = document.getElementById('image');
    img.style.backgroundImage = "url('" + previewPic.src + "')";
    img.innerHTML = previewPic.alt;
}

function unDo(){
    console.log("unDo success!");
    var img = document.getElementById('image');
    img.style.backgroundImage = "url('')";
    img.innerHTML = "Hover over an image below to display here."
}

function tabFocus() {
    console.log("Triggered!");
    var images = document.querySelectorAll(".preview");
    for (var i = 0; i < images.length; i++) {
        console.log("Tabindex check: " + i);
        images[i].setAttribute("tabindex", "0");
        images[i].onfocus = function() {
            upDate(this);
        };
        images[i].onblur = function() {
            unDo();
        };
    }
}

window.onload = function() {
    tabFocus();
};
