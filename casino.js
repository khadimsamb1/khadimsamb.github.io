function afficheR(){
    alert("Règlement \n \nLes règles sont très simples, vous commencez la partie avec 100 000 FCFA et vous devez gagner le plus d’argent possible. Vous n’avez pas le droit d’entrer des valeurs alphabétiques dans la barre des mises. \n \nComment jouer:\n \nChoisissez un nombre à parier. Vous avez le choix entre 0 et 36 ou entre un nombre pair ou impair.\n \nEntrez dans la barre des mises le montant que vous voulez parier. La valeur entrée sera en millier de FCFA, par exemple si vous entrer 10, vous pariez une somme de 10 000 FCFA.\n \nAppuyer sur le bouton Go pour lancer la partie. Vous pouvez aussi taper dans le tableau le chiffre que vous voulez parier, mais dans ce cas assurez vous d’avoir entrer de quoi miser dans la barre des mises.")
    alert("Si l'ordinateur tire 0, la mise est perdu.\n \nSi l'ordinateur tire votre numéro, il vous rend la mise plus 35 fois sa valeur.\n \nSi l'ordinateur tire un numéro pair et que vous avez choisi « Pair », il vous rend la mise plus 1 fois sa valeur. Même chose avec les impairs.\n \nDans tous les autres cas, la mise est perdue.")
}

function resetMoney(){
    document.getElementById("joueur").textContent = 100000;
    document.getElementById("ordi").textContent = 0;     
}

function jeuDeRoulette(){

    let choixPossible, valeurChoisie;

    let num_hasard = Math.floor(Math.random()*100+1);
    let nombreMis = document.getElementById("number").value;
    let mise = 1000 * nombreMis;

    let montantJoueur = document.getElementById("joueur").textContent;
    let montantOrdi = document.getElementById("ordi").textContent;
    let restant = parseFloat(montantJoueur);
    let perdue = parseFloat(montantOrdi);

    let img = document.querySelector('img');

    if( restant < mise ){
        alert("Vous n'avez pas assez pour miser !!!");
    }
    else{
        while(num_hasard >= 37){
            num_hasard = Math.floor(num_hasard / 2);
        }

        var deg = 3000 + Math.round(Math.random() * 3000);
        img.removeAttribute('style');
        
        var css = 'transform: rotate(' + deg + 'deg); transition: 2s ease;';
        
        img.setAttribute('style', css);
    
        choixPossible = document.getElementById("choix");
        valeurChoisie = choixPossible.options[choixPossible.selectedIndex].value;
    
        if(valeurChoisie == 37){
            if(num_hasard % 2 == 0){
                alert(num_hasard+" Vous avez gagné avec la pair");
    
                restant = parseFloat(restant) + parseFloat(mise); 
            }
            else{
                alert(num_hasard+" perdue");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise); 
            }
        }
        else if(valeurChoisie == 38){
            if(num_hasard % 2 != 0){
                alert(num_hasard+" Vous avez gagné avec l'impair");
    
                restant = parseFloat(restant) + parseFloat(mise);  
            }
            else{
                alert(num_hasard+" perdue");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise); 
            }
        }
        else{
            if(num_hasard == valeurChoisie){
                alert(num_hasard+" BRAVO !!! Vous avez choisis le bon numéro !!!");
    
                restant =parseFloat(restant + 35 * mise);
            }
            else if(num_hasard == 0){
                alert(num_hasard+" Vous êtes tomber sur 0, dommage !!!");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise);
            }
            else{
                alert(num_hasard+" Perdue");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise);
            }
    }

    document.getElementById("joueur").textContent = restant;
    document.getElementById("ordi").textContent = perdue;
   }   
}

function clickValeur(a){

    let valeurChoisie;

    let num_hasard = Math.floor(Math.random()*100+1);
    let nombreMis = document.getElementById("number").value;
    let mise = 1000 * nombreMis;

    let montantJoueur = document.getElementById("joueur").textContent;
    let montantOrdi = document.getElementById("ordi").textContent;
    let restant = parseFloat(montantJoueur);
    let perdue = parseFloat(montantOrdi);

    let img = document.querySelector('img');

    if( restant < mise ){
        alert("Vous n'avez pas assez pour miser !!!");
    }
    else{
        while(num_hasard >= 37){
            num_hasard = Math.floor(num_hasard / 2);
        }

        var deg = 3000 + Math.round(Math.random() * 3000);
        img.removeAttribute('style');
        
        var css = 'transform: rotate(' + deg + 'deg); transition: 2s ease;';
        
        img.setAttribute('style', css);
    
        choixPossible = document.getElementById("choix");
        valeurChoisie = a;
    
        if(valeurChoisie == 37){
            if(num_hasard % 2 == 0){
                alert(num_hasard+" Vous avez gagné avec la pair");
    
                restant = parseFloat(restant) + parseFloat(mise); 
            }
            else{
                alert(num_hasard+" perdue");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise); 
            }
        }
        else if(valeurChoisie == 38){
            if(num_hasard % 2 != 0){
                alert(num_hasard+" Vous avez gagné avec l'impair");
    
                restant = parseFloat(restant) + parseFloat(mise);  
            }
            else{
                alert(num_hasard+" perdue");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise); 
            }
        }
        else{
            if(num_hasard == valeurChoisie){
                alert(num_hasard+" BRAVO !!! Vous avez choisis le bon numéro !!!");
    
                restant =parseFloat(restant + 35 * mise);
            }
            else if(num_hasard == 0){
                alert(num_hasard+" Vous êtes tomber sur 0, dommage !!!");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise);
            }
            else{
                alert(num_hasard+" Perdue");
    
                perdue = parseFloat(perdue) + parseFloat(mise);
                restant = parseFloat(restant) - parseFloat(mise);
            }
    }

    document.getElementById("joueur").textContent = restant;
    document.getElementById("ordi").textContent = perdue;
   }   
}

function tourne(){
    let img = document.querySelector('img');

    img
    var deg = 3000 + Math.round(Math.random() * 3000);
    img.removeAttribute('style');
    
    var css = 'transform: rotate(' + deg + 'deg); transition: 2s ease;';
    
    img.setAttribute('style', css);
}

alert("Bienvenue dans notre jeu de la roulette !!!")
alert("Règlement \n \nLes règles sont très simples, vous commencez la partie avec 100 000 FCFA et vous devez gagner le plus d’argent possible. Vous n’avez pas le droit d’entrer des valeurs alphabétiques dans la barre des mises. \n \nComment jouer:\n \nChoisissez un nombre à parier. Vous avez le choix entre 0 et 36 ou entre un nombre pair ou impair.\n \nEntrez dans la barre des mises le montant que vous voulez parier. La valeur entrée sera en millier de FCFA, par exemple si vous entrer 10, vous pariez une somme de 10 000 FCFA.\n \nAppuyer sur le bouton Go pour lancer la partie. Vous pouvez aussi taper dans le tableau le chiffre que vous voulez parier, mais dans ce cas assurez vous d’avoir entrer de quoi miser dans la barre des mises.")
alert("Si l'ordinateur tire 0, la mise est perdu.\n \nSi l'ordinateur tire votre numéro, il vous rend la mise plus 35 fois sa valeur.\n \nSi l'ordinateur tire un numéro pair et que vous avez choisi « Pair », il vous rend la mise plus 1 fois sa valeur. Même chose avec les impairs.\n \nDans tous les autres cas, la mise est perdue.")