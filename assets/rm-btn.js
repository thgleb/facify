;(function() {
    var headingMoreBtn = document.querySelector(".gallery-heading__more-btn"),
        headingTextMore = document.querySelector(".gallery-heading__text-more");

    if (headingMoreBtn && headingTextMore)
        headingMoreBtn.addEventListener("click", handleHeadingMore);

    function handleHeadingMore() {
        headingMoreBtn.parentNode.removeChild(headingMoreBtn);
        headingTextMore.classList.add("gallery-heading__text-more_shown");
    }
})();
