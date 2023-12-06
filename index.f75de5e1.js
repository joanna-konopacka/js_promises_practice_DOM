"use strict";
const success = (result)=>{
    const message = document.createElement("div");
    message.className = "success";
    message.dataset.qa = "notification";
    message.innerText = result;
    document.body.append(message);
};
const error = (result)=>{
    const message = document.createElement("div");
    message.className = "warning";
    message.dataset.qa = "notification";
    message.innerText = result;
    document.body.append(message);
};
const firstPromise = new Promise((resolve, reject)=>{
    document.addEventListener("click", ()=>{
        resolve("First promise was resolved");
    });
    setTimeout(()=>{
        reject(new Error("First promise was rejected"));
    }, 3000);
});
const secondPromise = new Promise((resolve)=>{
    document.addEventListener("click", ()=>{
        resolve("Second promise was resolved");
    });
    document.addEventListener("contextmenu", ()=>{
        resolve("Second promise was resolved");
    });
});
const thirdPromise = new Promise((resolve)=>{
    document.addEventListener("click", ()=>{
        document.addEventListener("contextmenu", (e)=>{
            e.preventDefault();
            resolve("Third promise was resolved");
        });
    });
    document.addEventListener("contextmenu", (e)=>{
        e.preventDefault();
        document.addEventListener("click", ()=>{
            resolve("Third promise was resolved");
        });
    });
});
firstPromise.then(success).catch(error);
secondPromise.then(success);
thirdPromise.then(success);

//# sourceMappingURL=index.f75de5e1.js.map
