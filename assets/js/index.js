$(function(){
  $('#verif-email').click(function(){
    name = $('#name').val();
    userName = $('#userName').val();
    mail = $('#mail').val();
    tel = $('#tel').val();
    //autre methode ci-dessous "correction"
    //    if (testname.test(name)){
    //    alert('votre nom est ok');
    //  } else {alert('votre nom est faux');
    //}
    //Ci-dessus, récupération de la valeur des variable.
    //Ci-dessous, teste de validité des nom, prénoms, mail et téléphone.
    //Je limite les nom et prénom de 3 à 20 caractères maxi.
    if (name = /^[a-zA-Z_-]{3,20}$/ .test(name)){
      alert('Merci ! Votre Nom est Valide.');
    }else {
      alert('Désolé ! Votre Nom est Invalide !');
    }
    if (userName = /^[a-zA-Z_-]{3,20}$/ .test(userName)){
      alert('Merci ! Votre Prénom est Valide.');
    }else {
      alert('Désolé ! Votre Prénom est Invalide !');
    }
    //Je limite les extension de domaine de 2 à 6 caractères maxi.
    if (mail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/.test(mail)){
      alert('Merci ! Votre adresse mail est Valide.');
    }else {
      alert('Désolé ! Votre adresse mail est Invalide !');
    }
    if (tel = /^(0[1-68])(?:[ _.-]?(\d{2})){4}$/ .test(tel)){
      alert('Merci ! Votre n° de téléphone est Valide.');
    }else {
      alert('Désolé ! votre n° de téléphone est Invalide !');
    }
  });
});
