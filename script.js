// TODO : Ajouter un écouteur d'événement sur le formulaire
document.getElementById('form-examen').addEventListener('submit', function(e)
{
e.preventDefault();
// TODO : Récupérer les valeurs du formulaire
const examen = {
nom: document.getElementById('nom').value,
duree: parseInt(document.getElementById('duree').value),
description: document.getElementById('description').value,
proprietaire: document.getElementById('proprietaire').value,
questions: []
};
// TODO : Sauvegarder l'examen dans le localStorage sous une clé basée sur
//le_nom_du_propriétaire
const examsKey = 'examens_' + examen.proprietaire;
const exams = JSON.parse(localStorage.getItem(examsKey)) || [];
exams.push(examen);
localStorage.setItem(examsKey, JSON.stringify(exams));
alert('Examen ajouté avec succès !');
this.reset();
});
