import md5 from 'md5';
import { defected } from './cripter';
import CryptoJS from 'crypto-js';
const secretPass = "XkhZG4fW2t2W";

export function searchMatric(matric) {
    const codeMatric = md5(matric);
    const resultCurp = defected.filter(item => item.regexr === codeMatric);
    const result = decodeDefected(resultCurp);
    return result;
}
function decodeDefected(value) {
    var decodeDefect = [];
    for(let i=0;i<=value.length - 1; i++) {
        decodeDefect = [ ...decodeDefect,
            {
                nombre:decode(value[i].unity),
                apellidos:decode(value[i].fall),
                grupo:decode(value[i].deg),
                carrera:decode(value[i].soo),
                userName:decode(value[i].remove),
            }
        ]
    }
    return decodeDefect;
}
function decode(value) {
    const bytes = CryptoJS.AES.decrypt(value, secretPass);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data;
}
//https://console.firebase.google.com/u/0/project/consulta-de-accesos/hosting/sites