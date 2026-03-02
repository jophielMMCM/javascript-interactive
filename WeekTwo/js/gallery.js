function upDate(previewPic){
    var img = document.getElementById('image');
    img.style.backgroundImage = "url('" + previewPic.src + "')";
    img.innerHTML = previewPic.alt;
}

function unDo(){
    var img = document.getElementById('image');
    img.style.backgroundImage = "url('')";
    img.innerHTML = "Hover over an image below to display here."
}
