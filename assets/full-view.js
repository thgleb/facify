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

        var view = document.importNode(tpl.content, true),
            loader = view.querySelector(".fi__loader"),
            img = view.querySelector(".fi__image");

        img.src = e.currentTarget.href;

        if (e.currentTarget.hasAttribute("data-srcset"))
            img.srcset = e.currentTarget.getAttribute("data-srcset");

        img.addEventListener("load", function() {
            img.classList.add("fi__image_shown");
            loader.parentNode.removeChild(loader);
        });

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
