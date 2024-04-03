// href has __doPOstBack() which is a .NET function. We don't need it for this demo and it causes errors.
function __doPostBack() {
// Do nothing.
}


/* Important code starts here */

// Define the function.
const getLanguage = (event) => {

    // I'm not sure if this first line is necessary for GA
    // But e need it for `var langcode = {{Click ID}}; to work in the browser for testing/debugging.
    const langcode = event.target.getAttribute('id')     // var langcode = {{Click ID}};
    let lang = 'None';

    // I only did the first four languages.
    // Could probably simplify this more by pulling out the languageSelector string.
    const languageSets = {
        'English': ["languageSelectorEnglish", "languageSelectorԱնգլերեն", "languageSelector英文", "languageSelector英文",],
        'Armenian': ["languageSelectorArmenian", "languageSelectorհայերեն", "languageSelector亚美尼亚文", "languageSelector亞美尼文"],
        'Simplified Chinese': ["languageSelectorSimplified", "languageSelectorՊարզեցվածչինարեն", "languageSelector简体中文", "languageSelector簡體中文"],
        'Traditional Chinese': ["languageSelectorTraditional", "languageSelectorԱվանդականչինարեն", "languageSelector繁体中文", "languageSelector繁體中文"],
    }

    let thisLanguage = '';

    // Loop through the languageSets object and look for a match.
    const tester = () => {
        Object.entries(languageSets).forEach((languageSet) => {

            if (languageSet[1].includes(langcode)) {
                thisLanguage = languageSet[0]
            }
        })
        return thisLanguage
    }

    // Get the result of the tester() function.
    lang = tester();

    // Change the h1 to the name of the language.
    // This is for demo purposes only.
    const heading = document.getElementById('heading');
    heading.innerHTML = lang;

    return lang;
}

// Get an HTMLCollection of all the links in the DOM (Not recommended for production.)
const links = document.getElementsByTagName("a");

// Loop through each <a> tag in the Collection and add the `getLanguage` listener.
Array.from(links).forEach((link) => {
    link.addEventListener('click', getLanguage);
})
