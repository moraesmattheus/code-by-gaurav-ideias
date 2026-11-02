/**
 * PROJETO: Aplicativo de Tarefas (To-Do List) com Armazenamento - Lógica JavaScript
 * ORIGEM: CodeByGaurav
 * DATA: 01/11/2026
 * O QUE É: Lógica interativa para o componente.
 * FINALIDADE: Manipulação de eventos, DOM e cálculos dinâmicos.
 */

document.querySelector(".push").addEventListener("click", () => {

    if (document.querySelector("#newTask input").value.length == 0) {
        alert("Please Enter a Task")
    } else {

        document.querySelector("#tasks").innerHTML += `
        <div class="task">
                <span id="taskname">
                   ${document.querySelector("#newTask input").value.trim()}
                </span>
                <button class="delete"><i class="fa-solid fa-trash"></i></button>
            </div>
        `;

        let cTask = document.querySelectorAll(".delete");
        for(var i = 0; i < cTask.length; i++){
            cTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        document.querySelector("#newTask input").value = "";

    }

})