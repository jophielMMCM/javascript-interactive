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