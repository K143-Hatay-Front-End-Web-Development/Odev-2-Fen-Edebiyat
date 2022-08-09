import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// let k = ['', '', '']
// let l = ['', '', '']
// let m = ['', '', '']
// let tahta = [k, l, m]

// for (let i = 0; i < tahta.length; i++) {
//     let satir = tahta[i]
//     for (let j = 0; j < satir.length; j++) {
//         if (satir[j] === satir[j + 1] && satir[j + 1] === satir[j + 2] && satir[j] !== '') {
//             console.log(i + 1 + '. satirda oyun biter')
//             return
//         }
//     }
// }

// for (let i = 0; i < tahta.length; i++) {
//     if (k[i] === l[i] && l[i] === m[i] && (k[i] !== '' || l[i] !== '' || m[i] !== '')) {
//         console.log(i + 1 + '. sütunda oyun biter')
//         return
//     }
// }

// for (let i = 0; i < 3; i++) {
//     if (k[0] === l[1] && l[1] === m[2] && (k[0] !== '' || l[1] !== '' || m[2] !== '')) {
//         console.log('1. soldan capraz kosegen oyun biter')
//         return
//     }
// }
// for (let i = 0; i < 3; i++) {
//     console.log('error')
//     if (m[0] === l[1] && l[1] === k[2] && (k[2] !== '' || l[1] !== '' || m[0] !== '')) {
//         console.log('2. sagdan capraz kosegen oyun biter')
//         return
//     }
// }