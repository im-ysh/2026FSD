const fetchBtn = document.getElementById("fetch");
const statuslog = document.getElementById("status");
const resultlog = document.getElementById("result");

function fakefetch() {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(
                {
                    name : "vaihu",
                    age : 21
                }
            );
        },5000);
    })
};

async function fake() {
    statuslog.textContent = "fetching data...";
    resultlog.textContent = "";

    try {
        const ans = await fakefetch();
        statuslog.textContent = "data fetched successfully!";
        resultlog.textContent = `${ans.name} and ${ans.age}`;
    } catch (error) {
        statuslog.textContent = "data fetched failed!";
        resultlog.textContent = "error : " + error;
    }
}


fetchBtn.addEventListener("click", fake);