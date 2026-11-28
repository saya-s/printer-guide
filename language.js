/* Sorani Kurdish language add-on — existing script.js stays unchanged. */
(() => {
    "use strict";

    const dictionary = {
        "What would you like to do?": "دەتەوێت چی بکەیت؟",
        "Select an option to get started.": "یەکێک لە هەڵبژاردەکانی خوارەوە هەڵبژێرە.",
        "Scan": "سکانکردن",
        "Digitize your documents": "بەڵگەنامەکانت بکە بە فایلی دیجیتاڵ",
        "Print": "پرینتکردن",
        "Print from your device": "لە ئامێرەکەتەوە پرینت بکە",
        "Where would you like to scan?": "دەتەوێت فایلە سکانکراوەکەت بۆ کوێ بنێریت؟",
        "Choose your destination.": "شوێنی ناردنی فایلەکە هەڵبژێرە.",
        "OneDrive": "OneDrive",
        "Save to your cloud storage": "فایلەکانت لە OneDrive هەڵبگرە",
        "Email": "ئیمەیڵ",
        "Send to your inbox": "فایلەکە بۆ ئیمەیڵەکەت بنێرە",
        "What device are you printing from?": "لە چ ئامێرێکەوە پرینت دەکەیت؟",
        "Choose your device.": "ئامێرەکەت هەڵبژێرە.",
        "Phone": "مۆبایل",
        "Mobile printing": "پرینتکردن لە مۆبایلەوە",
        "Laptop": "لاپتۆپ",
        "Computer printing": "پرینتکردن لە کۆمپیوتەرەوە",
        "What type of phone do you use?": "مۆبایلەکەت چ جۆرێکە؟",
        "Choose your operating system.": "سیستەمی کارپێکردنی مۆبایلەکەت هەڵبژێرە.",
        "iOS": "iOS",
        "iPhone or iPad": "iPhone یان iPad",
        "Android": "Android",
        "Android phone or tablet": "مۆبایل یان تابلێتی Android",

        "First-Time Printer Setup": "ڕێکخستنی پرینتەر بۆ یەکەم جار",
        "Open the PaperCut portal": "کردنەوەی پۆرتاڵی PaperCut",
"Connect to the company network and open the PaperCut user portal using the button below.": "پەیوەندی بە Wi-Fi ـی کۆمپانیاوە بکە، پاشان لەسەر دوگمەی خوارەوە کلیک بکە بۆ کردنەوەی پۆرتاڵی PaperCut.",        "Sign in with Microsoft": "چوونە ژوورەوە بە Microsoft",
        "Select Sign in with Microsoft and log in using your company Microsoft 365 account.": "لەسەر Sign in with Microsoft کلیک بکە و بە ئەکاونتی Microsoft 365 ـی کۆمپانیا بچۆ ژوورەوە.",
        "Open Change Details": "کردنەوەی Change Details",
        "Select Change Details from the navigation menu.": "لە لیستی هەڵبژاردەکان، Change Details هەڵبژێرە.",
        "Generate your personal ID": "دروستکردنی کۆدی تایبەت (ID)",
        "Generate a new personal ID. Keep it secure; you will use it to authenticate at the office printers.": "کۆدێکی تایبەت (ID) بۆ خۆت دروست بکە. کۆدەکە بە نهێنی هەڵبگرە، چونکە بۆ چوونە ژوورەوە لە پرینتەرەکانی کۆمپانیا پێویستت پێی دەبێت.",
        "Change your password": "گۆڕینی پاسوۆرد",
        "Use the password change option in Change Details to set your PaperCut password.": "لە بەشی Change Details، هەڵبژاردەی گۆڕینی پاسوۆرد بەکاربهێنە و پاسوۆردێک بۆ PaperCut دابنێ.",
        "Review your account summary": "بینینی زانیارییەکانی ئەکاونت",
        "Select the Summary tab to view your balance, print jobs, printing activity and other account details.": "بەشی Summary بکەرەوە تا باڵانس، فایلەکانی چاوەڕوانی پرینت، چالاکییەکانی پرینتکردن و زانیارییەکانی تری ئەکاونتەکەت ببینیت.",

        "Scan to OneDrive": "سکانکردن بۆ OneDrive",
        "Log in": "چوونە ژوورەوە",
"log in to the printers touchScreen by swiping your card or using your personal ID number.": "بۆ چوونە ژوورەوە، کارتەکەت لە کارتخوێنەرەکە بدە یان کۆدی تایبەتی خۆت (ID) لە شاشەی پرینتەر بنووسە.",        "Load your document": "دانانی بەڵگەنامە",
        "Place your document on the scanner glass.": "بەڵگەنامەکەت لەسەر شووشەی سکانەر دابنێ.",
        "Select Scan": "هەڵبژاردنی Scan",
        "On the touchScreen select Scan then select Scan to Onedrive": "لە شاشەی پرینتەر، Scan هەڵبژێرە، پاشان Scan to OneDrive هەڵبژێرە.",
        "Review details": "پشکنینی زانیارییەکان",
        "After reviewing the details, click start.": "زانیارییەکان بپشکنە، پاشان لەسەر Start کلیک بکە.",
        "Finish scanning": "تەواوکردنی سکان",
        "Click Finish, then check your Email.": "کلیک لەسەر Finish بکە، پاشان ئیمەیڵەکەت بپشکنە.",
        "Click Finish, then check your OneDrive folder.": "لەسەر Finish کلیک بکە، پاشان فۆڵدەری OneDrive ـەکەت بکەرەوە و فایلەکەت ببینە.",
        


        "Scan to Email": "سکانکردن بۆ ئیمەیڵ",
        "On the touchScreen select Scan then select Scan to Email": "لە شاشەی پرینتەر، Scan هەڵبژێرە، پاشان Scan to Email هەڵبژێرە.",

        "Print from Laptop": "پرینتکردن لە لاپتۆپەوە",
"Connect to the network": "پەیوەندی بە Wi-Fi ـی کۆمپانیاوە بکە.",        
"Connect to the company network.": "پەیوەندی بە Wi-Fi ـی کۆمپانیاوە بکە.",        "Login to Print Deploy": "چوونە ژوورەوە لە Print Deploy",
        "on your screen locate Print Deploy, click to open and login with microsoft": "لە لاپتۆپەکەت بەرنامەی Print Deploy بدۆزەرەوە و بیکەرەوە، پاشان بە ئەکاونتی Microsoft بچۆ ژوورەوە.",
        "close Print Deploy": "داخستنی Print Deploy",
        "after succesfullly loging in close the application": "کاتێک چوویتە ژوورەوە، بەرنامەکە دابخە.",
        "Open your document": "کردنەوەی فایل",
        "Press Ctrl + P on Windows or go to file and click print.": "لە Windows، دوگمەکانی Ctrl + P پێکەوە دابگرە، یان لە بەشی Print، File هەڵبژێرە.",
        "Select your printer": "هەڵبژاردنی پرینتەر",
"Choose the company printer and enter printing preferences.": "پرینتەری کۆمپانیا هەڵبژێرە، پاشان ڕێکخستنەکانی پرینتکردن بەپێی پێویستی خۆت دیاری بکە.",       
 "Print your document": "ناردنی فایل بۆ پرینتەر",
        "Tap Print to submit your print job.": "لەسەر Print کلیک بکە تا فایلەکەت بۆ پرینتەر بنێردرێت.",
        "Release your print job": "پرینتکردنی فایلەکەت",
"On the printer’s touchScreen, swipe your card or enter your personal ID number, select your print job and tap Print to release it.": "بۆ چوونە ژوورەوە، کارتەکەت لە کارتخوێنەرەکە بدە یان کۆدی تایبەتی خۆت (ID) لە شاشەی پرینتەر بنووسە. پاشان ئەو فایلەی دەتەوێت پرینتی بکەیت هەڵبژێرە و لەسەر Print کلیک بکە.",
        "Print from iOS": "پرینتکردن لە iOS ـەوە",
        "Connect to Wi-Fi": "بەستنەوە بە Wi-Fi",
        "Connect to the company Wi-Fi network.": "بە Wi-Fi ـی کۆمپانیاوە ببەستەوە.",
        "Open a document or photo in an app that supports printing.": "بەڵگەنامە یان وێنەکەت لە بەرنامەیەک بکەرەوە کە پرینتکردنی تێدا بەردەست بێت.",     
        "Open Print": "کردنەوەی Print",
        "Tap Share and scroll down to select Print.": "لەسەر Share کلیک بکە، پاشان بڕۆ بۆ خوارەوە و Print هەڵبژێرە.",      
        "Choose the available company printer and review the preferences.": "پرینتەری کۆمپانیا هەڵبژێرە، پاشان ڕێکخستنەکانی پرینتکردن بە پێی پێویستی خۆت دیاری بکە.",       
        "Enter your credentials": "نووسینی کۆد و پاسوۆرد",
        "Enter your personal PaperCut ID and PIN, then tap OK.": "کۆدی تایبەتت (ID) و PIN ـی PaperCut بنووسە، پاشان لەسەر OK کلیک بکە.",

        "Print from Android": "پرینتکردن لە Android ـەوە",
        "Connect to the company Wi-Fi network.": "بە Wi-Fi ـی کۆمپانیاوە ببەستەوە.",
        "Set up mobile printing": "ڕێکخستنی پرینتەر لە مۆبایل",
        "Install the Mobility Print app from the Google Play Store and follow the setup instructions.": "بەرنامەی Mobility Print لە Google Play Store دابەزێنە و بەپێی ڕێنماییەکانی بەرنامەکە ڕێکی بخە.",
        "Open the document": "کردنەوەی فایل",
        "Open a document or photo, tap Share, and select Print": "بەڵگەنامە یان وێنەکەت بکەرەوە، لەسەر Share کلیک بکە و Print هەڵبژێرە.",
        "Choose the company printer and printing preferences.": "پرینتەری کۆمپانیا هەڵبژێرە و ڕێکخستنەکانی پرینت دیاری بکە.",
        "Authenticate and print": "چوونە ژوورەوە و پرینتکردن",
        "Click the popup that you recieved, sign in with your personal printer ID number and your passcode to print": "لەسەر ئەو پەیامەی بۆت دێت کلیک بکە، پاشان کۆدی تایبەتت (ID) و پاسوۆردەکەت بنووسە تا بتوانیت پرینت بکەیت.",

        "Home": "سەرەکی",
        "EMPLOYEE SELF-SERVICE": "ڕێنمایی بۆ کارمەندان",
        "Printer Help Center": "ڕێنمایی بەکارهێنانی پرینتەر",
        "Everything you need to print and scan in the office.": "هەموو ڕێنماییەکانی پرینتکردن و سکانکردن لە کۆمپانیا.",
        "← Back": "گەڕانەوە →",
        "First time using our printers?": "یەکەم جارە پرینتەرەکانی کۆمپانیا بەکاردەهێنیت؟",
        "Set up your personal PaperCut ID and password before printing or scanning.": "پێش پرینتکردن یان سکانکردن، کۆدی تایبەت (ID) و پاسوۆردێک بۆ PaperCut دابنێ.",
        "First-Time Setup →": "← ڕێکخستن بۆ یەکەم جار",
        "First-Time Setup": "ڕێکخستن بۆ یەکەم جار",
        "Please enable JavaScript to use this guide.": "تکایە JavaScript چالاک بکە تا بتوانیت ئەم ڕێنماییە بەکاربهێنیت.",
        "Need help?": "پێویستت بە یارمەتی هەیە؟",
        "Contact the IT Department for further assistance.": "بۆ یارمەتی زیاتر، پەیوەندی بە بەشی IT ـەوە بکە.",
        "Hiwa Rauf for Investment & Development": "هیوا ڕەئوف بۆ وەبەرهێنان و گەشەپێدان",
        "Open PaperCut Portal ↗": "کردنەوەی پۆرتاڵی PaperCut ↗",
        "Get Mobility Print ↗": "دابەزاندنی Mobility Print ↗",
        "Setup complete": "ڕێکخستنەکان تەواو بوون",
        "Once your ID and password are set up, return to the homepage for printing or scanning instructions.": "دوای دروستکردنی کۆدی تایبەت (ID) و پاسوۆردەکەت، بگەڕێوە بۆ پەڕەی سەرەکی تا ڕێنماییەکانی پرینتکردن یان سکانکردن ببینیت.",
        "Follow the steps below.": "بەپێی هەنگاوەکانی خوارەوە کار بکە.",
        "Return to homepage": "گەڕانەوە بۆ پەڕەی سەرەکی",
        "→": "←",
        "Guide navigation": "گەڕان لە ڕێنماییەکان",
        "Hiwa Rauf Investment & Development": "هیوا ڕەئوف بۆ وەبەرهێنان و گەشەپێدان",
        "Hiwa Rauf": "هیوا ڕەئوف",
        /* PRINT VIA EMAIL */

"How would you like to print?":
    "دەتەوێت بە چ ڕێگایەک پرینت بکەیت؟",

"Choose your preferred printing method.":
    "ڕێگایەک بۆ پرینتکردن هەڵبژێرە.",

"Print via Email":
    "پرینتکردن لە ڕێگەی ئیمەیڵەوە",

"Send a PDF document via email":
    "ناردنی فایلی PDF بە ئیمەیڵ",

"Compose a new email":
    "نووسینی ئیمەیڵێکی نوێ",

"Open your email application and compose a new email.":
    "بەرنامەی ئیمەیڵەکەت بکەرەوە و ئیمەیڵێکی نوێ بنووسە.",

"Enter the recipient":
    "دیاریکردنی وەرگری ئیمەیڵ",

"Enter":
    "ئەم ناونیشانە بنووسە",

"in the recipient field.":
    "لە بەشی To.",

"Attach your document":
    "هاوپێچکردنی فایل",

"Attach the PDF document you would like to print. Only PDF files are supported.":
    "ئەو فایلەی دەتەوێت پرینتی بکەیت، هاوپێچی ئیمەیڵەکە بکە. تێبینی: فایلەکە دەبێت بە فۆرماتی PDF بێت.",

"Send the email":
    "ناردنی ئیمەیڵ",

"Send the email to submit your print job.":
    "ئیمەیڵەکە بنێرە، پاشان دەتوانیت فایلەکەت لە پرینتەری کۆمپانیا پرینت بکەیت.",
        
    };

    const normalize = text => text.trim().replace(/\s+/g, ' ');

    function translate(text) {
        const key = normalize(text);

        if (Object.hasOwn(dictionary, key)) {
            return dictionary[key];
        }

        const placeholder = key.match(/^Step (\d+) — Add photograph here$/);

        if (placeholder) {
            return `هەنگاوی ${placeholder[1]} — وێنە لێرە زیاد بکە`;
        }

        const image = key.match(/^(.*?) - Image (\d+)$/);

        if (image) {
            return `${translate(image[1])} — وێنەی ${image[2]}`;
        }

        return text;
    }

    // Remember the original static English strings for a lossless switch back.
    const staticNodes = [];

    const staticSelectors = [
        '.home-link',
        '.intro .eyebrow',
        '.intro h1',
        '.intro p:not(.eyebrow)',
        '#back',
        '#setup-heading',
        '.setup-copy p',
        '#first-time-setup .setup-button',
        'footer strong',
        'footer p'
    ];

    for (const selector of staticSelectors) {
        document.querySelectorAll(selector).forEach(el => {
            staticNodes.push([el, el.textContent]);
        });
    }

    const staticAttributes = [];

    document.querySelectorAll(
        '.company-logo, .footer-logo, .navigation'
    ).forEach(el => {
        for (const attr of ['alt', 'aria-label']) {
            if (el.hasAttribute(attr)) {
                staticAttributes.push([
                    el,
                    attr,
                    el.getAttribute(attr)
                ]);
            }
        }
    });

    // Keep the language controls beside Home, at the top-right edge.
    const homeLink = document.querySelector('.home-link');

    const controls = document.createElement('div');
    controls.className = 'language-header-actions';

    homeLink.before(controls);
    controls.append(homeLink);

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'language-toggle';

    controls.append(toggle);

    let language = 'en';

    try {
        if (localStorage.getItem('printer-guide-language') === 'ckb') {
            language = 'ckb';
        }
    } catch (_) {}

    function translateContent() {
        const walker = document.createTreeWalker(
            content,
            NodeFilter.SHOW_TEXT
        );

        let node;

        while ((node = walker.nextNode())) {
            if (node.nodeValue.trim()) {
                node.nodeValue = translate(node.nodeValue);
            }
        }

        content.querySelectorAll('img[alt]').forEach(img => {
            img.alt = translate(img.alt);
        });
    }

    function applyLanguage() {
        const kurdish = language === 'ckb';

        document.documentElement.lang = language;
        document.documentElement.dir = kurdish ? 'rtl' : 'ltr';

        for (const [el, original] of staticNodes) {
            el.textContent = kurdish ? translate(original) : original;
        }

        for (const [el, attr, original] of staticAttributes) {
            el.setAttribute(
                attr,
                kurdish ? translate(original) : original
            );
        }

        toggle.textContent = kurdish ? 'English' : 'کوردی';
        toggle.lang = kurdish ? 'en' : 'ckb';
        toggle.dir = kurdish ? 'ltr' : 'rtl';

        toggle.setAttribute(
            'aria-label',
            kurdish
                ? 'Switch to English'
                : 'گۆڕینی زمان بۆ کوردی'
        );

        if (kurdish) {
            translateContent();

            breadcrumb.textContent = breadcrumb.textContent
                .split(' / ')
                .map(translate)
                .join(' / ');

            document.title = document.title
                .split(' | ')
                .map(translate)
                .join(' | ');
        }
    }

    // The original hash navigation calls render(),
    // so the translation follows every page.
    const originalRender = render;

    render = function () {
        originalRender();
        applyLanguage();
    };

    toggle.addEventListener('click', () => {
        language = language === 'en' ? 'ckb' : 'en';

        try {
            localStorage.setItem(
                'printer-guide-language',
                language
            );
        } catch (_) {}

        render();
    });

    render();
})();