let contador = 0;
let input = document.getElementById('text-area');
let principal = document.getElementById('areaLista'); 

function adicionarTarefa(){

    let texto = input.value;

    if( input !== '' && input !== null && input !== undefined ){

        /*
            Acrescenta ao contador, que serve como um id 
            especifico para cada tarefa;
        */ 
        ++contador;

        let classeTarefa

        //Cria um novo item;
        let novoItem = `<div id="${contador}" class="tarefa">

            <input onclick="marcarTarefa(${contador})" id="checkbox${contador}" class="checkbox" type="checkbox">

            <p id="text${contador}" class="text">${texto}</p>

            <button onclick="deletarTarefa(${contador})" id="delete">Deletar</button>

        </div>`;

        //Adiciona o novo item à página;
        principal.innerHTML += novoItem;


        //Limpa o campo input e traz o foco de volta para ele;
        input.value = '';
        input.focus();

    } 


}

function marcarTarefa(primeiroId){

    let checkbox = document.getElementById('checkbox'+ primeiroId );
    let tarefa = document.getElementById(primeiroId);
    let texto = document.getElementById('text'+primeiroId );
    let classeT = texto.getAttribute("class");



    if( checkbox.checked ){

        texto.classList.add("realizada");
        tarefa.classList.add( "feita");

        tarefa.parentNode.appendChild(tarefa);

    } else {

        texto.classList.remove("realizada");
        tarefa.classList.remove( "feita");

        tarefa.parentNode.appendChild(tarefa);

    }
 

    


}

function deletarTarefa(id){

    let tarefa = document.getElementById(id);
    tarefa.remove();

}
