document.addEventListener("DOMContentLoaded",() => {

const flood = document.getElementById("flood") as HTMLElement;

const btn = document.getElementById("btn")as HTMLButtonElement;

const list = document.getElementById("list") as HTMLElement;

const inp = document.getElementById("inp") as HTMLInputElement
if (flood) {
 
    btn.addEventListener("click",()=>{

        const inputValue = inp.value;

        if (inputValue) {
            const newItem  = document.createElement("li");
            newItem.textContent= inputValue;

            list.appendChild(newItem)
            inp.value = "";

        }
    })
}
})