//boss
const vidat = 100;
let vida = 100;
let vidaIN = document.getElementById('vidaIN');
const CAB = 15; //classe de armadura do boss
//HERO
const vidaTH=100;
let vidaH=100;
let CAH=13; //classe de armadura do heroi
let vidaHERO = document.getElementById('vidaHERO');
//-----
let porc = 100;
let porci=100;
let porc2=100;
let porci2=100;

let stun=0;





vidaIN.innerHTML = "HP"+porc+"%";
vidaHERO.innerHTML = "HP"+porc+"%";

function sword(){
    
    stun=stun-1;
    var dado = getRandomInt(1, 20);
    dado=dado+4;
    let dano = getRandomInt(1, 10);
    dano= dano+2;
    
    porcentagem(dado, vidaIN, dano, CAB, vidat);
    if(stun<=0){
      
      porcentagem2(CAH, vidaHERO,vidaTH);
      setTimeout(function(){
        perder();
        ganhar()
      }, 2000);
    }
    
    
}
function magic(){
    stun=stun-1;
    
    let dano = getRandomInt(1, 4)+1;
    var dado = 20;
    porcentagem(dado, vidaIN, dano, CAB, vidat);
     dado = getRandomInt(1, 20)+2;
    if(dado>=15){
        stun= 0;
        stun = getRandomInt(1, 4)+1;
        
        document.getElementById("dialogo").innerHTML = "<p>O inimigo está paralisado por:"+(stun-1)+" turnos</p><p> Dano: "+dano+"</p>";
      }
      if(stun<=0){
        porcentagem2(CAH, vidaHERO,vidaTH);
        setTimeout(function(){
          perder();
        }, 2000);
      }
      
      
}
function heal(){
  stun=stun-1;
  if(vidaH!=100){
    let heal = getRandomInt(2, 8)+4; 
    vidaH=vidaH+heal;
    porc2 = (heal/vidaTH)*100;
    porci2 = porci2+porc2;
   
  
         
          if(vidaH>100){
            vidaH=100;
            porci2=100;
            vidaHERO.style.cssText = 'width:' + porci2 + '%;';
            vidaHERO.innerHTML = "HP"+(porci2).toFixed(2)+"%";
          }else{
            vidaHERO.style.cssText = 'width:' + porci2 + '%;';
            vidaHERO.innerHTML = "HP"+(porci2).toFixed(2)+"%";
          }
         // 
          setTimeout(function(){
            if(stun<=0){
              
              porcentagem2(CAH, vidaHERO,vidaTH);
              setTimeout(function(){
                perder();
              }, 2000);
            }
          }, 1000);

  }else{
    document.getElementById("dialogo").innerHTML = "<p>"+"Vida cheia " +"</p>";
  }
  perder();
 
}
function dodge(){
  CAH=18;
  document.getElementById("dialogo").innerHTML = "<p>Sua defesa aumentou</p>";
  if(stun<=0){
    
    porcentagem2(CAH, vidaHERO,vidaTH);
    setTimeout(function(){
      perder();
    }, 2000);
  }
  
}
  function porcentagem(dado, vidaA, dano, CA, total){
    if(dado>=CA){
            
        document.getElementById("dialogo").innerHTML = "<p>"+"Você acertou, DANO: " + dano+"</p>";
        
        porc = (dano/total)*100; //porcentagem em relação a vida
        
        porci = porci-porc;
        
        
        vidaA.style.cssText = 'width:' + porci + '%;';
        vidaA.innerHTML = "HP"+(porci).toFixed(2)+"%";
        vida = vida-dano;
        if(vida<=0){
          vida=0;
            vidaA.innerHTML = "HP0%";
            vidaA.style.cssText = 'width:0%;';
            vidaA.innerHTML = "0%";
        }
        
        
        
        
        dano=0;
        

    }else{
        document.getElementById("dialogo").innerHTML = "...";
        
        document.getElementById("dialogo").innerHTML = "<p>"+"Você errou! "+"</p>";
    }
    
  }
  function porcentagem2(CA,vidaB, total){
    let dado= getRandomInt(1,20);
    dado=dado+7;
    let dano = getRandomInt(1,10);
    dano=dano+4;
    
    if(dado>=CA){
      
      porc2 = (dano/total)*100;

      porci2 = porci2-porc2;

      vidaB.style.cssText = 'width:' + porci2 + '%;';
      vidaB.innerHTML = "HP"+(porci2).toFixed(2)+"%";

      vidaH = vidaH-dano;
      
      

      if(vidaH<=0){
          vidaH=0;
          vidaB.innerHTML = "HP0%";
          vidaB.style.cssText = 'width:0%;';
          vidaB.innerHTML = "0%";
      }
      dano=0;
    }
  }
  
function perder(){
 
  let hidden = document.getElementById('hidden');
  if(vidaH<=0){
    hidden.style.display = 'block';
    hidden.innerHTML = "<p>Você perdeu</p></br>";
  }
}
function ganhar(){
  let hidden2 = document.getElementById('hidden2');
  let ganhou = document.getElementById('ganhou');
  if(vida<=0){
    hidden2.style.display = 'block';
    ganhou.innerHTML = "<p>Parabéns, Você conseguiu!!</p></br><p>Conseguiu me derrotar</p>";
  }
}

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function next(){
    window.location.href = "../PARABENS.html";
  }