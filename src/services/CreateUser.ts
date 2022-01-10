
interface TechObject {
    title: string;
    experience: number;
}

interface CreateUserData {
    nome?: string;
    email: string;
    senha: string;
    techs: Array<string | TechObject>;             // Array<string> 
}


export default function createUser({nome, email, senha}: CreateUserData) {

    const user = {
        nome,
        email,
        senha,
    }

    return user;
}