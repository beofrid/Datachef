//============================================
//  código Regina Gabriela Rodrigues Moraes
//============================================


function verify() {
    const titulo = document.getElementById("title").value;
    const ingredientes = document.getElementById("ingredients").value;
    const preparo = document.getElementById("recipe").value;
    const categoria = document.getElementById("category").value;
    const arquivo = document.getElementById("upload").files.length;

    if (titulo === "" ||ingredientes === "" ||preparo === "" ||categoria === "" ||arquivo === 0) {
        alert("Preencha todos os campos e selecione uma imagem!");
    } else {
        alert("Receita enviada!");
        form.reset();
    }
}
