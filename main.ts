console.log('Hola TypeScript');

// Number
// Explicito
let phone: number;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error

// Inferido
let phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
// Tipado Explicito
let isPro: boolean;
isPro = true;
// isPro = 1;

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error!

// Strings
let username: string = 'oswaldot';
username = "Oswaldo";
// username = true; // Error: tipo string

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + ' Pineda'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);







