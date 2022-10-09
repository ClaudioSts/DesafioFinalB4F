//Importar o multer
import multer from "multer";

// Se exportarmos um objeto chamado config dos nossos ficheiros
//  o Next corre trata os ficheiros de forma diferente
export const config = {
    //Neste caso dizemos que na API
    api: {
        //Não queremos que o next tente preparar o conteúdo do corpo
        bodyParser: false,
    },
};

//O NextJS não é fantástico com middlewares portanto criamos
//  uma função que recebe um middleware como argumento e retorna uma função
//  
export function correMiddleware(req, res, middleware) {
    return new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}



export default async function handler(req, res) {
    if (req.method === "POST") {
        //Invocar a função cria um MiddleWare, 
        //  recebe um objeto de opções como argumento
        //  neste caso a propriedade 'dest' refere-se ao destino onde os ficheiros serão guardados
        const upload = multer({ dest: 'uploads/' })

        //O método 'single' serve para guardar um ficheiro, o argumento
        //  deve ser a chave do ficheiro no FormData que criaste no frontend
        await correMiddleware(
            req,
            res,
            upload.single("ficheiro-do-frontend")
        )

        //Neste caso não respondemos com nada.
        res.send("ok")
    }
}