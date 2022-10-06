import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://projetointegrador-omaq.onrender.com/'
})

export const cadastroUsuario = async(url: any, dados: any, setDados: any) => {
    const resposta = await api.post(url, dados)
    setDados(resposta.data)
}
