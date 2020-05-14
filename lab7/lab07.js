const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
for( var i = 0; i < works.length; i ++) {
    var str = "";
    for (var j = 0; j < works[i].photos.length; j++) {
        str = str + "<img src= 'images/" + works[i].photos[j] + "'class = 'photo'>";
    }
    document.write("<div class = 'item'><p style='font-family: Parfait Display, serif; font-size: larger;font-weight: bolder;margin-bottom: 10pt'> Genre:" + works[i].tips + "</p>" + "<div class = 'inner-box'><h3 style='display: inline'>" + works[i].author + "</h3>lifetime:" + works[i].lifetime + "</div><div class='inner-box'><h3>Popular Photos</h3>" + str + "</div><button style='font-size: large'>visit</button></div></div>");
}