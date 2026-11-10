//Algoritmo: AES-256-CBC

import crypto from 'crypto';

const algorithm ='aes-256-cbc';
const secretKey = Buffer.from(process.env.CRYPTO_SECRET || '12345678901234567890123456789012')
const inicialIV= Buffer.from(process.env.CRYPTO_IV || '1234567890123456')


function encrypt(text){
    if(!text) return text
    try {
        const cipher = crypto.createCipheriv(algorithm,secretKey, inicialIV);
        let encrypted= cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        return encrypted;
    } catch (error) {
        console.error('Erro ao criptografar',  error.message);
        return text

    }
}

export default { encrypt };