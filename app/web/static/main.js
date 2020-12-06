function openSection(id, clickedItem) {
    $(".tab a").removeClass("selected");
    $(clickedItem).addClass("selected");

    $(".section").hide();
    $(id).fadeIn();
}

function hashChanged() {
    const hash = window.location.hash;
    if (hash) {
        openSection(window.location.hash + "-section", $("." + hash.substring(1)));
    }
}

function loadPhotoList(sectionID, identifier) {
    var photoSection = $(sectionID);
    $.getJSON("photos.json", function(e) {
        e[identifier].forEach(function(imgInfo) {
            let width = imgInfo.width || 450, height = imgInfo.height || 300;
            photoSection.append(`<img src='${imgInfo.url}' width='${width}' height='${height}' />`);
        });
    });
}

var currentImgList;
var currentImgIndex;

function loadPhotoGrid(sectionID, identifier) {
    const smallWidth = 150, smallHeight = 100, bigWidth = 900, bigHeight = 600;
    var photoSection = $(sectionID);
    $.getJSON("photos.json", function(e) {
        currentImgList = [];
        e[identifier].forEach(function(imgInfo, i) {
            const src = imgInfo.url;
            currentImgList.push({ src: src, width: bigWidth, height: bigHeight });
            photoSection.append(`<img class='img-icon' src='${src}' width='${smallWidth}' height='${smallHeight}' onclick='imgPopup(${i})' />`);
        });
    });
}

function imgPopup(index) {
    currentImgIndex = index;
    $("#imgModal").fadeIn(200);
    setModalImg();
}

function imgScroll(amt) {
    currentImgIndex += amt;
    if (currentImgIndex < 0)
        currentImgIndex = 0;
    if (currentImgIndex >= currentImgList.length)
        currentImgIndex = currentImgList.length - 1;
    setModalImg();
}

function setModalImg() {
    // Hide/show arrows
    if (currentImgIndex == 0)
        $("#imgModal .modal-larr").hide();
    else
        $("#imgModal .modal-larr").show();
    if (currentImgIndex == currentImgList.length - 1)
        $("#imgModal .modal-rarr").hide();
    else
        $("#imgModal .modal-rarr").show();

    // Set the content image
    var img = currentImgList[currentImgIndex]
    $("#imgModal img").attr("src", img.src).attr("width", img.width).attr("height", img.height);
}

function imgModalClose() {
    $("#imgModal").hide();
}

$(function() {
    // Don't close modal when you click on the inside
    $(".modal-content").click(function(e) {
        e.stopPropagation();
    });
});