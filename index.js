document.addEventListener("DOMContentLoaded", function () {
    var flood = document.getElementById("flood");
    var btn = document.getElementById("btn");
    var list = document.getElementById("list");
    var inp = document.getElementById("inp");
    if (flood) {
        btn.addEventListener("click", function () {
            var inputValue = inp.value;
            if (inputValue) {
                var newItem = document.createElement("li");
                newItem.textContent = inputValue;
                list.appendChild(newItem);
                inp.value = "";
            }
        });
    }
});
