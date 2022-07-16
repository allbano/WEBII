/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var btnAlterar = document.getElementById('btn-alterar');
var btnAtendimento = document.getElementById('btn-atendimento');
var btnCriar = document.getElementById('btn-criar');

var containerAlterar = document.getElementById('container-cliente-alterar');
var containerAtendimento = document.getElementById("container-cliente-atendimento");
var containerCriar = document.getElementById('container-cliente-criar');

btnAlterar.addEventListener('click', function() {
    var containerAtendimento = document.getElementById("container-cliente-atendimento");
    if(containerAlterar.style.display === "none" || containerAlterar.style.display === "") {
        containerAlterar.style.display = "block";
        containerAtendimento.style.display = "none";
        containerCriar.style.display = "none";
    }
});

btnAtendimento.addEventListener('click', function() {
    if(containerAtendimento.style.display === "none" || containerAtendimento.style.display === ""){
        containerAlterar.style.display = "none";
        containerAtendimento.style.display = "block";
        containerCriar.style.display = "none";
    }
});

btnCriar.addEventListener('click', function() {
    var containerAtendimento = document.getElementById("container-cliente-atendimento");
    if(containerCriar.style.display === 'none' || containerCriar.style.display === ''){
        containerAlterar.style.display = 'none';
        containerAtendimento.style.display = 'none';
        containerCriar.style.display = 'block';
    }
});