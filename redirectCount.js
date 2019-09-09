let count = 20;

function countFunc() {
    const interval = setInterval(() => {
        count--;
        let element = document.getElementById('count')
        element.innerHTML = `${count}`;
        if (count === 0) {
            window.location = 'http://talktelecom.com.br/'
            clearInterval(interval)
        }
    }, 1000)
}

countFunc();
