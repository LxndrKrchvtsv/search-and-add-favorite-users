import * as axios from "axios";

// const getRandomNumber = () => {
//     return Math.floor(Math.random() * (1000 - 3000)) + 3000;
// }
//
// let randomNumber = getRandomNumber();

const instance = axios.create({
    baseURL: `https://randomuser.me/api/?nat=us&results=100&seed=foobar&inc=name,email,login,picture,registered`
})

export const getUsers = () => {
    return instance.get().then(response => response.data);
}