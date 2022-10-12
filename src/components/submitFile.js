import { useEffect } from "react";

export default function inputSubmitType({ onSelect }) {
  const onFileSelect = async (e) => {
    //Tal como o valor de um input fica guardado em e.target.value
    //Os ficheiros ficam em e.target.files
    //console.log(e.target.files) -> FileList {0: File, length: 1}

    //Para podermos enviar um ficheiro num pedido http
    // o corpo do pedido não pode ser em Json,
    // neste caso vamos recorrer a FormData
    // que também funciona por pares chave/valor
    // https://developer.mozilla.org/en-US/docs/Web/API/FormData
    const formData = new FormData();

    formData.append(
      //Adicionar um par chave/valor
      "ficheiro-do-frontend", //nome da chave/propriedade
      e.target.files[0] //o valor, neste caso o ficheiro
    );
    onSelect(formData);

    //Também é possivel adicionar o resto de um formulário ao formData,
    // basta adicionar outro par chave/valor.

    /*fetch("/api/multer", {
      method: "POST",
      body: formData,
    });*/
  };

  return (
    <div>
      <input type={"file"} onChange={(e) => onFileSelect(e)} />
    </div>
  );
}
