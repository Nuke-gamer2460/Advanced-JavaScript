document.addEventListener('DOMContentLoaded', function() {
    const titles = document.querySelectorAll('.title');
    const texts = document.querySelectorAll('.myText');

    titles.forEach((title, index) => {
        title.addEventListener('click', function() {
            texts.forEach((text) => {
                text.classList.remove('active');
            });
            const nextText = texts[index];
            nextText.classList.toggle('active');
        });
    });
});
