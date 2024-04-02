// href has __doPOstBack() .NET function. We don't need it for this demo and it causes errors.
function __doPostBack() {
// Do nothing.
}

// I'm not sure if this is necessary for GA but I need it for `var langcode = {{Click ID}};`
//  to work in the browser for testing/debugging.


// Get an HTMLCollection of all the links in the DOM (Not recommended for production.)
const links = document.getElementsByTagName("a");

// Loop through each <a> tag in the Collection.
Array.from(links).forEach((link) => {
    // Get id of each link.
    linkClickid = link.getAttribute('id')
    // Pass that id into the gitLang function.
    link.onclick = getLang(linkClickid);
})


/* Important code starts here */

function getLang(linkClickid) {
    // var langcode = {{Click ID}};
    var langcode = linkClickid;

    var lang = 'None';
    // English view
    if(langcode == "languageSelectorEnglish"){
        lang = 'English';
    } else if(langcode == "languageSelectorArmenian"){
        lang = 'Armenian';
    } else if(langcode == "languageSelectorSimplified"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelectorTraditional"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelectorKorean"){
        lang = 'Korean';
    } else if(langcode == "languageSelectorSpanish"){
        lang = 'Spanish';
    } else if(langcode == "languageSelectorTagalog"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelectorVietnamese"){
        lang = 'Vietnamese';
    }
    // Armenian view
    else if(langcode == "languageSelectorԱնգլերեն"){
        lang = 'English';
    } else if(langcode == "languageSelectorհայերեն"){
        lang = 'Armenian';
    } else if(langcode == "languageSelectorՊարզեցվածչինարեն"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelectorԱվանդականչինարեն"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelectorկորեերեն"){
        lang = 'Korean';
    } else if(langcode == "languageSelectorԻսպաներեն"){
        lang = 'Spanish';
    } else if(langcode == "languageSelectorՏագալերեն"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelectorՎիետնամերեն"){
        lang = 'Vietnamese';
    }
    // SChinese view
    else if(langcode == "languageSelector英文"){
        lang = 'English';
    } else if(langcode == "languageSelector亚美尼亚文"){
        lang = 'Armenian';
    } else if(langcode == "languageSelector简体中文"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelector繁体中文"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelector韩文"){
        lang = 'Korean';
    } else if(langcode == "languageSelector西班牙文"){
        lang = 'Spanish';
    } else if(langcode == "languageSelector他加禄文"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelector越南文"){
        lang = 'Vietnamese';
    }
    // TChinese view
    else if(langcode == "languageSelector英文"){
        lang = 'English';
    } else if(langcode == "languageSelector亞美尼文"){
        lang = 'Armenian';
    } else if(langcode == "languageSelector簡體中文"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelector繁體中文"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelector韓文"){
        lang = 'Korean';
    } else if(langcode == "languageSelector西班牙文"){
        lang = 'Spanish';
    } else if(langcode == "languageSelector他加祿文"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelector越南文"){
        lang = 'Vietnamese';
    }
    // Korean view
    else if(langcode == "languageSelector영어"){
        lang = 'English';
    } else if(langcode == "languageSelector아르메니아사람"){
        lang = 'Armenian';
    } else if(langcode == "languageSelector중국어간체"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelector중국어번체"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelector한국인"){
        lang = 'Korean';
    } else if(langcode == "languageSelector스페인어"){
        lang = 'Spanish';
    } else if(langcode == "languageSelector타갈로그어"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelector베트남어"){
        lang = 'Vietnamese';
    }
    // Spanish view
    else if(langcode == "languageSelectorInglés"){
        lang = 'English';
    } else if(langcode == "languageSelectorarmenio"){
        lang = 'Armenian';
    } else if(langcode == "languageSelectorchinosimplificado"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelectorchinotradicional"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelectorcoreana"){
        lang = 'Korean';
    } else if(langcode == "languageSelectorEspañol"){
        lang = 'Spanish';
    } else if(langcode == "languageSelectortagala"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelectorvietnamita"){
        lang = 'Vietnamese';
    }
    // Tagalog view
    else if(langcode == "languageSelectorIngles"){
        lang = 'English';
    } else if(langcode == "languageSelectorArmenian"){
        lang = 'Armenian';
    } else if(langcode == "languageSelectorPinasimplengchinese"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelectorTradisyunalnaIntsik"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelectorKorean"){
        lang = 'Korean';
    } else if(langcode == "languageSelectorSpanish"){
        lang = 'Spanish';
    } else if(langcode == "languageSelectortagalog"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelectorVietnamese"){
        lang = 'Vietnamese';
    }
    // Vietnamese view
    else if(langcode == "languageSelectorTiếngAnh"){
        lang = 'English';
    } else if(langcode == "languageSelectorngườiArmenia"){
        lang = 'Armenian';
    } else if(langcode == "languageSelectortiếngTrunggiảnthể"){
        lang = 'Simplified Chinese';
    } else if(langcode == "languageSelectorTruyềnthốngTrungQuốc"){
        lang = 'Traditional Chinese';
    } else if(langcode == "languageSelectorHànQuốc"){
        lang = 'Korean';
    } else if(langcode == "languageSelectorTiếngTâyBanNha"){
        lang = 'Spanish';
    } else if(langcode == "languageSelectorTagalog"){
        lang = 'Tagalog';
    } else if(langcode == "languageSelectorTiếngViệt"){
        lang = 'Vietnamese';
    }

    return lang;
}


