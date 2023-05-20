
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar")
const botonCopiar = document.getElementById("botonCopiar")

const muneco = document.getElementById("muneco");
const aviso = document.getElementById("aviso");
const containerEncriptado = document.getElementById("containerEncriptado");

const ingreseTexto = document.getElementById("ingreseTexto");
const textoEncriptado = document.getElementById("textoEncriptado");

function ocultarMuneco() {
    muneco.classList.add("ocultar");
    aviso.classList.add("ocultar");
    containerEncriptado.classList.remove("ocultar");
}

function mostrarMuneco() {
    muneco.classList.remove("ocultar");
    aviso.classList.remove("ocultar");
    containerEncriptado.classList.add("ocultar");
}

function encriptador(texto) {

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
    for (let i=0;i<matrizCodigo.length;i++) { 
        if(texto.includes(matrizCodigo[i][0])) { 
            texto = texto.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]) 
        } 
    }

    return texto;
}

function mostrarEncriptado() {
    let texto = ingreseTexto.value;
    let encriptado = encriptador(texto);

    if (texto != 0) {
        ocultarMuneco();
    } else {
        mostrarMuneco();
    }

    ingreseTexto.value = '';

    botonCopiar.textContent = "Copiar";

    textoEncriptado.textContent = encriptado;

    textoEncriptado.style.height = `${textoEncriptado.scrollHeight}px`;        //para que la altura sea igual que el conteniddo el textarea
}

function desEncriptador(texto) {

    let matrizCodigo=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
    for (let i=0;i<matrizCodigo.length;i++) { 
        if(texto.includes(matrizCodigo[i][1])) { 
            texto = texto.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]) 
        } 
    }

    return texto;
}

function mostrarDesencriptado() {
    let texto = ingreseTexto.value;
    let desencriptado = desEncriptador(texto);

    if (texto != 0) {
        ocultarMuneco();
    } else {
        mostrarMuneco();
    }

    ingreseTexto.value = '';

    botonCopiar.textContent = "Copiar";

    textoEncriptado.textContent = desencriptado;

    textoEncriptado.style.height = `${textoEncriptado.scrollHeight}px`;        //apra que la altura sea igual que el contenidod el textarea
}

function copiar(){
    let texto = textoEncriptado.value;
    navigator.clipboard.writeText(texto);

    botonCopiar.textContent = "Copiado!";
}

botonEncriptar.addEventListener('click', mostrarEncriptado);

botonDesencriptar.addEventListener('click', mostrarDesencriptado);

botonCopiar.addEventListener('click', copiar);