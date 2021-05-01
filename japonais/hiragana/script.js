document.getElementById('envoie').addEventListener("submit", function(e){
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

function divAleat(){
  var parent = $(".divparent");

  var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
};


function affiche(){
    var c = document.getElementById('correction');
    c.style.visibility = 'visible';
}

function cacher(){
    var d = document.getElementById('correction');
    d.style.visibility = 'hidden' ;
}

const caract = ["あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","ん"];

//function aleat(){
//    
//    var caractRestants=caract.slice(0);
//    var huitAleatoires=[];
//    while (huitAleatoires.length<8) huitAleatoires.push(caractRestants.splice(Math.floor(Math.random()*caractRestants.length),1)[0]);
// 
//    console.log(huitAleatoires)
//    document.getElementById("textAleat").innerHTML = huitAleatoires.join(' ');
//}



//document.getElementById('ex2').addEventListener("submit", function(e){
//    e.preventDefault();
//    var aleatxt = document.getElementById('textAleat');
//    var divtxt = aleatxt.innerText;
//    console.log(divtxt);
//    
//    var saisieUti = document.getElementById('contentex');
//    var sais = saisieUti.value;
//    console.log(sais);
//    
//    var car1 = divtxt.substring(0,1);
//    var car2 = divtxt.substring(2,3);
//    var car3 = divtxt.substring(4,5);
//    var car4 = divtxt.substring(6,7);
//    var car5 = divtxt.substring(8,9);
//    var car6 = divtxt.substring(10,11);
//    var car7 = divtxt.substring(12,13);
//    var car8 = divtxt.substring(14,15); 
//    
//    
//    var sais1 = sais.substring(0,1);
//    
//    var petitTab = [car1, car2, car3, car4, car5, car6, car7, car8];
//    
//    var found1 = caract.find(element => element == car1);
//    var found2 = caract.find(element => element == car2);
//    var found3 = caract.find(element => element == car3);
//    var found4 = caract.find(element => element == car4);
//    var found5 = caract.find(element => element == car5);
//    var found6 = caract.find(element => element == car6);
//    var found7 = caract.find(element => element == car7);
//    var found8 = caract.find(element => element == car8);
//    
//    console.log(caract.indexOf(found1));
//    var al1 = caract.indexOf(found1);
//    var al2 = caract.indexOf(found2);
//    var al3 = caract.indexOf(found3);
//    var al4 = caract.indexOf(found4);
//    var al5 = caract.indexOf(found5);
//    var al6 = caract.indexOf(found6);
//    var al7 = caract.indexOf(found7);
//    var al8 = caract.indexOf(found8);
//    
//    
//    const tabFr = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wo","n"];
//    
//    var f1 = tabFr[al1];
//    var f2 = tabFr[al2];
//    var f3 = tabFr[al3];
//    var f4 = tabFr[al4];
//    var f5 = tabFr[al5];
//    var f6 = tabFr[al6];
//    var f7 = tabFr[al7];
//    var f8 = tabFr[al8];
//
//        if(sais == f1+" "+f2+" "+f3+" "+f4+" "+f5+" "+f6+" "+f7+" "+f8){
//            alert("bon caractère");
//        }else{
//            alert("mauvais caractère");
//        }
//    
//})



const tabFr = ["a","i","u","e","o","ka","ki","ku","ke","ko","sa","shi","su","se","so","ta","chi","tsu","te","to","na","ni","nu","ne","no","ha","hi","fu","he","ho","ma","mi","mu","me","mo","ya","yu","yo","ra","ri","ru","re","ro","wa","wo","n"];

let randomCharacs, randomIndexes, regexString
  document.getElementById('range').addEventListener('change', (e)=>{
    document.querySelector('.info-range').textContent = e.target.value + ' charactères'
  })
  document.getElementById('randomize').addEventListener('click', ()=>{
   regexString = ''
   randomCharacs = []; randomIndexes = [];
  for (let index = 0; index < document.getElementById('range').value; index++) {
   index == document.getElementById('range').value - 1 ? regexString += '[a-z]{1,3}' : regexString +='[a-z]{1,3}\ +' 
   let indexTab = Math.floor(Math.random() * caract.length)
   let characterChoisi = caract[indexTab]
   while(randomCharacs.includes(characterChoisi)){
    indexTab = Math.floor(Math.random() * caract.length)
    characterChoisi = caract[indexTab]
   }
   randomIndexes.push(indexTab)
   randomCharacs.push(characterChoisi)
   document.querySelector('.text').innerHTML = randomCharacs.join(' ')
  }
 })
 document.querySelector('#form2').addEventListener('submit', (e)=>{
  e.preventDefault()
  let regexp = new RegExp(`${regexString}`, 'ig')
  if(!regexp.test(document.querySelector('#reponse').value)){
   alert('Veuillez entrer le bon nombre de characteres')
   return
  }
  let reponse = document.querySelector('#reponse').value.split(' ')
  let results = 0
  reponse.forEach((charac, i)=>{
   if(charac == tabFr[randomIndexes[i]]){
    results++
   }
  })
  if(results == reponse.length){
   alert("100% de bonnes réponses 🔥")
  }else if(results == 0){
   alert("0 bonne réponse loser 👎")
  }else{
   alert(results + " bonne(s) réponse(s) ")
  }
 })









