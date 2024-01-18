let id = 0;
let idHiddenField = document.querySelector('#id');
let nom = document.querySelector('input[name=nom]');
let prenom = document.querySelector('input[name=prenom]');
let email = document.querySelector('input[name=email]');
let table = document.querySelector('tbody');

document.querySelector('#add').addEventListener('click', addClient);
document.querySelector('#cancel').addEventListener('click', cancelEdit);
document.querySelector('#update').addEventListener('click', updateClient);


function addClient() {
    id++;
    let ligne = `
    <tr id="c${id}">
      <td>${nom.value}</td>
      <td>${prenom.value}</td>
      <td>${email.value}</td>
      <td>
        <button class='edit' type='button' data-idclient=${id}>Edit
        </td>
      <td>
        <button class='delete' type='button' data-idclient=${id}>Delete
        </td>
    </tr>`;
    table.innerHTML += ligne;
    resetFileds();
    connectEventListerNewBtns();
}

function resetFileds() {
    document.querySelectorAll('input').forEach(input => {
        input.value = '';
    });
}

function deleteClient() {
    let idClient = `tr#c${this.getAttribute('data-idclient')}`;
    let rowClient = document.querySelector(idClient);
    if (confirm('Voulez-vous supprimer ce client ?')) {
        rowClient.remove();
    }
}

function completeForm() {
    let idClient = `tr#c${this.getAttribute('data-idclient')}`;
    let rowClient = document.querySelector(idClient);
    idHiddenField.value = this.getAttribute('data-idclient');
    nom.value = rowClient.children[0].textContent;
    prenom.value = rowClient.children[1].textContent;
    email.value = rowClient.children[2].textContent;
    document.querySelector('#update').style.display = "block";
    document.querySelector('#cancel').style.display = "block";
    document.querySelector('#add').style.display = "none";
}

function cancelEdit() {
    document.querySelector('#update').style.display = "none";
    document.querySelector('#cancel').style.display = "none";
    document.querySelector('#add').style.display = "block";
    resetFileds();
}

function updateClient() {
    let rowClient = document.querySelector(`tr#c${idHiddenField.value}`);
    rowClient.children[0].textContent = nom.value;
    rowClient.children[1].textContent = prenom.value;
    rowClient.children[2].textContent = email.value;
    cancelEdit();
}

function connectEventListerNewBtns() {
    document.querySelectorAll('button.delete').forEach(btn => {
        btn.addEventListener('click', deleteClient);
    });
    document.querySelectorAll('button.edit').forEach(btn => {
        btn.addEventListener('click', completeForm);
    });
}