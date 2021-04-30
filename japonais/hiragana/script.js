function affiche(){
    var c = document.getElementById('correction');
    c.style.visibility = 'visible' ;
}

function cacher(){
    var d = document.getElementById('correction');
    d.style.visibility = 'hidden' ;
}


//function aleat(){
//    var caract = document.getElementById("validation").getElementsByTagName("div");
//    caract.forEach(function(groupe){
//        caract.insertBefore(groupe, caract[Math.floor(Math.random()*caract.length)]);
//  });
//}

function aleat(){
    const caract = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"];
    
    var caractRestants=caract.slice(0);
    var huitAleatoires=[];
    while (huitAleatoires.length<8) huitAleatoires.push(caractRestants.splice(Math.floor(Math.random()*caractRestants.length),1)[0]);
 
    console.log(huitAleatoires)
    document.getElementById("textAleat").innerHTML = huitAleatoires.join();

//    const randomCaract = caract[Math.floor(Math.random() * caract.length)];
//    console.log("random caract =>", randomCaract);
//    var elt = document.getElementById('tt');
//    var monTexte = elt.innerText;
//    console.log(monTexte);
}


$(function() {
  var parent = $(".divparent");

  var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});






