function replaceWord () {
    document.body.innerHTML = document.body.innerHTML.replace(/the /g, 'replaced ').replace(/The /g, 'Replaced ');
}

// After four seconds
setTimeout(replaceWord, 4000);
