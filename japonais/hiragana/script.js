document.getElementById('envoie').addEventListener("submit", function(e){
    e.preventDefault();
    var inputs = document.querySelectorAll('form div div input');
    var n = 0;
    for(var i=0; i<inputs.length;i++){
        if(!inputs[i].value){
            n++;
        }
    }
    var resultat = 46-n;
    alert("Vous avez "+n+" erreurs, votre score est de "+resultat+"/46.");
})


function affiche(){
    var c = document.getElementById('correction');
    c.style.visibility = 'visible';
}

function cacher(){
    var d = document.getElementById('correction');
    d.style.visibility = 'hidden' ;
}


function aleat(){
    const caract = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"];
    
    var caractRestants=caract.slice(0);
    var huitAleatoires=[];
    while (huitAleatoires.length<8) huitAleatoires.push(caractRestants.splice(Math.floor(Math.random()*caractRestants.length),1)[0]);
 
    console.log(huitAleatoires)
    document.getElementById("textAleat").innerHTML = huitAleatoires.join();
}


function divAleat(){
  var parent = $(".divparent");

  var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
};






