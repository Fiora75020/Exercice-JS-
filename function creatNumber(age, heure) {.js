function creatNumber(age, heure) {
    
    
    let numéroDeDossart = Math.floor(Math.random() * 2000);


    if (age <18 && numéroDeDossart < 999) {
      console.log("Vous allez courir à 12H30 et vous avez le numéro " + numéroDeDossart)}
     else if (age > 18 &&numéroDeDossart > 999 && heure === true){
        console.log("Vous allez courir à 9h30 et vous avez le numéro " + numéroDeDossart)}
     else if (numéroDeDossart > 999 && heure === false){
        console.log("Vous allez courir à 11H30 et vous avez le numéro " + numéroDeDossart) }
     else if (age ===18){
        console.log("Aller à  l'acceuil !")}
    };
    
  
  creatNumber(19 , false);