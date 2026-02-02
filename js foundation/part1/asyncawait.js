// function fetchData() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({name : "vaishiu" , sec : "cse"});
//         },5000);
//     })
// };

// async function displayData() {
//     try {
//         const data = await fetchData();
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// displayData();


// function post() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve({name:"bgr" , brand : "fgh"})
//         },3000);
//     })
// };

// function comment() {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             reject({ error : "this is resolved"});
//         }, 5000);
//     })
// };


// async function data() {
//     try {
//         const [postdata,commentdata] = await Promise.all([post(),comment()]);
//         console.log(postdata);
//         console.log(commentdata);
//     }
//     catch(error) {
//         console.log("error is here : " , error);
//     }
// };

// data();

// console.log("start of program");
// function heelopgm() {
//     console.log("say hello");
// }

// setTimeout(() => {
//     heelopgm();
// },10000);

// console.log("decgnghhn");
// console.log("whbnkhff");


function fetchData() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let success = true;
        if(success) {
            resolve("fvnfnhNFJGRN");
        } else {
            reject({error : "this is an error"});
        }
        },5000); 
    });
}

fetchData() 
.then((data) => {
    console.log(data);
    return data.toUpperCase();
})
.then((value) => {
    console.log(value);
})
.catch((error) => console.error(error));