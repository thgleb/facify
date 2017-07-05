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

        document.body.classList.add("_fixed");
        document.body.appendChild(view);
    }

    function closeView(view) {
        document.body.classList.remove("_fixed");
        view.parentNode.removeChild(view);
    }
})();
