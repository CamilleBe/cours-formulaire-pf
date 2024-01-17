
    function ajouterClient() {
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var email = document.getElementById('email').value;

    var table = document.getElementById('tableClients').getElementsByTagName('tbody')[0];
    var nouvelleLigne = table.insertRow(table.rows.length);

    var cell1 = nouvelleLigne.insertCell(0);
    var cell2 = nouvelleLigne.insertCell(1);
    var cell3 = nouvelleLigne.insertCell(2);
    var cell4 = nouvelleLigne.insertCell(3);
    var cell5 = nouvelleLigne.insertCell(4);

    cell1.innerHTML = nom;
    cell2.innerHTML = prenom;
    cell3.innerHTML = email;
    cell4.innerHTML = '<button onclick="editerClient(this)">Éditer</button>';
    cell5.innerHTML = '<button onclick="supprimerClient(this)">Supprimer</button>';

    // Réinitialiser les champs du formulaire
    document.getElementById('nom').value = '';
    document.getElementById('prenom').value = '';
    document.getElementById('email').value = '';
}

    function supprimerClient(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

    function editerClient(btn) {
    var row = btn.parentNode.parentNode;
    var nom = prompt("Modifier le nom", row.cells[0].innerHTML);
    var prenom = prompt("Modifier le prénom", row.cells[1].innerHTML);
    var email = prompt("Modifier l'email", row.cells[2].innerHTML);

    if (nom && prenom && email) {
    row.cells[0].innerHTML = nom;
    row.cells[1].innerHTML = prenom;
    row.cells[2].innerHTML = email;
}
}
