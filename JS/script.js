//Let - Variable - se pueden asiganr y modificarse a medida que se ejecuta el programa
//const - constante valores fijos
//Var - variable // Constante

//DOM - MODELO DE OBJETOS DEL DOCUMENTO

document.getElementById('toggleInfo').addEventListener('click', function() {
    const infoSection = document.querySelector('.info'); // Asegúrate de que 'info' sea una clase válida en tu HTML.

    if (infoSection.classList.contains('oculto')) {
        infoSection.classList.remove('oculto');
        this.textContent = 'Ocultar Información Personal';
    } else {
        infoSection.classList.add('oculto'); // Punto y coma añadido.
        this.textContent = 'Mostrar Información Personal';
    }
});

//Funcion para cambiar la imagen de perfil
function changeProfileImage() {
    const input = document.createElement('Input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = function (event) {
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById
                ('profileImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    input.click();
}

//Agregar evento de click a la imagen de perfil

document.getElementById('profileImage').addEventListener('click', changeProfileImage);