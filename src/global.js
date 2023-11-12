let clickDetectors = [];

function attachEventListeners() {
    clickDetectors = [];

    document.querySelectorAll('.link-openinnew-container').forEach((element) => {
        const link = element.getAttribute('data-link');
        clickDetectors.push(element.addEventListener('click', (event) => {
            window.open(link);
        }));
    });

    document.querySelectorAll('.hyperlink').forEach((element) => {
        const link = element.getAttribute('data-link');
        clickDetectors.push(element.addEventListener('click', (event) => {
            console.log('test');
            window.location.href = (link);
        }));
    });
}

attachEventListeners();
