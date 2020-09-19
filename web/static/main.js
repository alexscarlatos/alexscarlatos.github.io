function openSection(id, clickedItem) {
    $(".tab a").removeClass("selected");
    $(clickedItem).addClass("selected");

    $(".section").hide();
    $(id).fadeIn();
}

function loadPhotoList(sectionID, identifier) {
    var photoSection = $(sectionID);
    $.getJSON("photos.json", function(e) {
        e[identifier].forEach(function(src) {
            if (src.substring(0, 1) != "_") {
                var width = 450, height = 300;
                var whMatches = src.match(/w(\d+)h(\d+)/);
                if (whMatches) {
                    width = whMatches[1];
                    height = whMatches[2];
                }
                
                photoSection.append("<img src='images/" + identifier + "/" + src + "' width='" + width + "' height='" + height + "' />");
            }
        });
    });
}

var currentImgList;
var currentImgIndex;

function loadPhotoGrid(sectionID, identifier) {
    var photoSection = $(sectionID);
    $.getJSON("photos.json", function(e) {
        currentImgList = [];
        var i = 0;
        e[identifier].forEach(function(src) {
            if (src.substring(0, 1) != "_") {
                var width = 150, height = 100;
                var bigWidth = 600, bigHeight = 400;
                var whMatches = src.match(/w(\d+)h(\d+)/);
                if (whMatches) {
                    bigWidth = whMatches[1];
                    bigHeight = whMatches[2];
                }

                src = "images/" + identifier + "/" + src;

                currentImgList.push({ src: src, width: bigWidth, height: bigHeight });
                photoSection.append("<img class='img-icon' src='" + src
                    + "' width='" + width + "' height='" + height
                    + "' onclick='imgPopup(" + i + ")' />");
                i++;
            }
        });
    });
}

function imgPopup(index) {
    currentImgIndex = index;
    $("#imgModal").fadeIn();
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