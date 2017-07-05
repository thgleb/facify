;(function() {
    var tpl = document.querySelector("#full-view-tpl");

    if (!tpl)
        return;

    var links = document.querySelectorAll(".gallery__item-link");

    [].forEach.call(links, function(link) {
        link.addEventListener("click", handleView);
    });

    function handleView(e) {
        e.preventDefault();

        var view = document.importNode(tpl.content, true);
        view.querySelector(".fi__image").src = e.currentTarget.href;

        view.querySelector(".fi__close").addEventListener("click", function() {
            closeView(this.parentNode);
        });

        var container = view.querySelector(".fi");

        container.addEventListener("click", function(e) {
            if(e.target === container)
                closeView(e.target);
        });

        window.addEventListener("keydown", handleEscKey);

        document.body.classList.add("_fixed");
        document.body.appendChild(view);
    }

    function handleEscKey(e) {
        if (e.keyCode === 27)
            closeView(document.querySelector(".fi"));
    }

    function closeView(view) {
        document.body.classList.remove("_fixed");
        view.parentNode.removeChild(view);

        window.removeEventListener("keydown", handleEscKey);
    }
})();
