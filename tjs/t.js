
function findAllElements($root) {
    const $elements = $root.querySelectorAll("[data-t]");

    $elements.forEach(el => {
        const htmlFile = el.getAttribute("data-t") + ".html";

        fetch(htmlFile).then(data => {
            data.text().then(text => {
                el.innerHTML = text;

                findAllElements(el);
            })
        }).catch(err => {
            console.error("Error loading " + htmlFile, err)
        })
    })
}

function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    findAllElements(document);
});