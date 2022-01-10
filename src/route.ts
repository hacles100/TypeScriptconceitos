import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {


    const user = createUser({
        email: 'jakintaquero@gmail.com',
        senha: '12345678',
        techs: [
            'NodeJS',
            'ReactJS',
            'React Native',
            { title: 'JavaScript', experience: 10 },
        ],
    });

    return response.json( {message: 'Hello World'} );
}