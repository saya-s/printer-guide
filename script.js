
/* =========================================
   01. CONFIGURATION
   ========================================= */

const portalUrl = 'https://172.16.10.55:9192/user';


/* =========================================
   02. MENU STRUCTURE
   ========================================= */

// Each option contains:
// [Page ID, Title, Description, Icon]

const menus = {

    home: {
        title: 'What would you like to do?',
        subtitle: 'Select an option to get started.',
        options: [
            ['scan', 'Scan', 'Digitize your documents', 'scan'],
            ['print', 'Print', 'Print from your device', 'print']
        ]
    },

    scan: {
        title: 'Where would you like to scan?',
        subtitle: 'Choose your destination.',
        options: [
            ['onedrive', 'OneDrive', 'Save to your cloud storage', 'cloud'],
            ['email', 'Email', 'Send to your inbox', 'mail']
        ]
    },

    print: {
        title: 'What device are you printing from?',
        subtitle: 'Choose your device.',
        options: [
            ['phone', 'Phone', 'Mobile printing', 'phone'],
            ['laptop', 'Laptop', 'Computer printing', 'laptop']
        ]
    },

    phone: {
        title: 'What type of phone do you use?',
        subtitle: 'Choose your operating system.',
        options: [
            ['ios', 'iOS', 'iPhone or iPad', 'phone'],
            ['android', 'Android', 'Android phone or tablet', 'phone']
        ]
    }

};


/* =========================================
   03. STEP-BY-STEP INSTRUCTIONS
   ========================================= */

// Each step contains:
// [Heading, Description, Optional image path]

const guides = {

    /* -------------------------------------
       FIRST-TIME PRINTER SETUP
       ------------------------------------- */

    setup: {
        title: 'First-Time Printer Setup',

        steps: [

            [
                'Open the PaperCut portal',
                'Connect to the company network and open the PaperCut user portal using the button below.'
            ],

            [
                'Sign in with Microsoft',
                'Select Sign in with Microsoft and log in using your company Microsoft 365 account.'
            ],

            [
                'Open Change Details',
                'Select Change Details from the navigation menu.',
                'assets/change-details.png'
            ],

            [
                'Generate your personal ID',
                'Generate a new personal ID. Keep it secure; you will use it to authenticate at the office printers.',
                'assets/change-id.png',

            ],

            [
                'Change your password',
                'Use the password change option in Change Details to set your PaperCut password.',
                'assets/change-pin.png',
 
            ],

            [
                'Review your account summary',
                'Select the Summary tab to view your balance, print jobs, printing activity and other account details.',
                  'assets/summary.png',
          
            ]

        ]
    },


    /* -------------------------------------
       SCAN TO ONEDRIVE
       ------------------------------------- */

    onedrive: {
        title: 'Scan to OneDrive',

        steps: [

            [
                'Log in',
                'log in to the printers touchScreen by swiping your card or using your personal ID number.',
                'assets/touchscreen.png'
            ],

            [
                'Load your document',
                'Place your document on the scanner glass.'
            ],

            [
                'Select Scan',
                'On the touchScreen select Scan then select Scan to Onedrive',
                [
                    'assets/printOptionsScan.png',
                    'assets/scanToOnedriveOption.png'

                ]

            ],

            [
                'Review details',
                'After reviewing the details, click start.',
                'assets/startScanOnedrive.png'

            ],

            [
                'Finish scanning',
                'Click Finish, then check your OneDrive folder.',
                'assets/finishScan.png'

            ]

        ]
    },


    /* -------------------------------------
       SCAN TO EMAIL
       ------------------------------------- */

    email: {
        title: 'Scan to Email',

        steps: [

            [
                'Log in',
                'log in to the printers touchScreen by swiping your card or using your personal ID number.',
                'assets/touchscreen.png'
            ],

            [
                'Load your document',
                'Place your document on the scanner glass.'
            ],

            [
                'Select Scan',
                'On the touchScreen select Scan then select Scan to Email',
                [
                    'assets/printOptionsScan.png',
                    'assets/scanToEmail.png'

                ]

            ],

            [
                'Review details',
                'After reviewing the details, click start.',
                'assets/startScanEmail.png'

            ],

            [
                'Finish scanning',
                'Click Finish, then check your OneDrive folder.',
                'assets/finishScan.png'

            ]

        ]
    },


    /* -------------------------------------
       PRINT FROM LAPTOP
       ------------------------------------- */

    laptop: {
        title: 'Print from Laptop',

        steps: [

            [
                'Connect to the network',
                'Connect to the company network.'
            ],

            [
                'Login to Print Deploy',
                'on your screen locate Print Deploy, click to open and login with microsoft ',
                'assets/locateprintdeploy.png'
            ],
           
            [
                'close Print Deploy',
                'after succesfullly loging in close the application',
                'assets/printdeploylogin.png'
            ],

            [
                'Open your document',
                'Press Ctrl + P on Windows or go to file and click print.'
            ],

            [
                'Select your printer',
                'Choose the company printer and enter printing preferences.',
                'assets/printscreen.png'
            ],

           
            [
                'Print your document',
                'Tap Print to submit your print job.',
            ],

            [
                'Release your print job',
                'On the printer’s touchscreen, swipe your card or enter your personal ID number, select your print job and tap Print to release it.',
                'assets/touchScreen.png'
            ]

        ]
    },


    /* -------------------------------------
       PRINT FROM IOS
       ------------------------------------- */

    ios: {
        title: 'Print from iOS',

        steps: [

            [
                'Connect to Wi-Fi',
                'Connect to the company Wi-Fi network.'
            ],

            [
                'Open your document',
                'Open a document or photo in an app that supports printing.'
            ],

            [
                'Open Print',
                'Tap Share and scroll down to select Print.',
                'assets/sharetoprint.png'
            ],

            [
                'Select your printer',
                'Choose the available company printer and review the preferences.',
                'assets/selectprinter.png'

            ],

            [
                'Enter your credentials',
                'Enter your personal PaperCut ID and PIN, then tap OK.',
                'assets/authentication.png'

            ],

            [
                'Print your document',
                'Tap Print to submit your print job.'
            ],

            [
                'Release your print job',
                'On the printer’s touchscreen, swipe your card or enter your personal ID number, select your print job and tap Print to release it.',
                'assets/touchscreen.png'
            ]

        ]
    },


    /* -------------------------------------
       PRINT FROM ANDROID
       ------------------------------------- */

    android: {
        title: 'Print from Android',

        steps: [

            [
                'Connect to Wi-Fi',
                'Connect to the company Wi-Fi network.'
            ],

            [
                'Set up mobile printing',
                'Install the Mobility Print app from the Google Play Store and follow the setup instructions.'
            ],

            [
                'Open the document',
                'Open a document or photo, tap Share, and select Print',
                'assets/openImageAndroid.png'
            ],

            [
                'Select your printer',
                'Choose the company printer and printing preferences.',
                'assets/selectPrinterAndroid.png'
            ],

            [
                'Authenticate and print',
                'Click the popup that you recieved, sign in with your personal printer ID number and your passcode to print',
                [
                'assets/popupAndroid.png',
                'assets/enterIDAndroid.png'
                ]
            ],
            [
                'Release your print job',
                'On the printer’s touchscreen, swipe your card or enter your personal ID number, select your print job and tap Print to release it.',
                'assets/touchscreen.png'
            ]

        ]
    }

};


/* =========================================
   04. NAVIGATION STRUCTURE
   ========================================= */

// Defines where the Back button takes the user.

const parents = {
    setup: 'home',
    scan: 'home',
    print: 'home',
    phone: 'print',
    laptop: 'print',
    ios: 'phone',
    android: 'phone',
    onedrive: 'scan',
    email: 'scan'
};


// Defines the names displayed in breadcrumbs
// and browser tab titles.

const labels = {
    home: 'Home',
    setup: 'First-Time Setup',
    scan: 'Scan',
    print: 'Print',
    phone: 'Phone',
    laptop: 'Laptop',
    ios: 'iOS',
    android: 'Android',
    onedrive: 'OneDrive',
    email: 'Email'
};


/* =========================================
   05. SVG ICONS
   ========================================= */

const icons = {

    scan: `
        <path d="M3 8V3h5m8 0h5v5m0 8v5h-5m-8 0H3v-5M2 12h20"/>
    `,

    print: `
        <rect x="3" y="8" width="18" height="10" rx="2"/>
        <path d="M7 8V3h10v5M7 15h10v7H7zM17 11h1"/>
    `,

    cloud: `
        <path d="M6 19a5 5 0 1 1 0-10 7 7 0 0 1 13-1 6 6 0 0 1-1 11z"/>
    `,

    mail: `
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 5 10 8 10-8"/>
    `,

    phone: `
        <rect x="6" y="2" width="12" height="20" rx="2"/>
        <path d="M10 18h4"/>
    `,

    laptop: `
        <rect x="4" y="3" width="16" height="13" rx="1"/>
        <path d="m4 16-3 5h22l-3-5"/>
    `

};


/* =========================================
   06. HTML ELEMENTS
   ========================================= */

const content = document.getElementById('content');
const setupCard = document.getElementById('first-time-setup');
const navigation = document.querySelector('.navigation');
const backButton = document.getElementById('back');
const breadcrumb = document.getElementById('breadcrumb');


/* =========================================
   07. GET CURRENT PAGE
   ========================================= */

function getCurrentPage() {

    const page = location.hash.slice(1) || 'home';

    // Return to homepage if the page does not exist.
    if (!Object.hasOwn(menus, page) &&
        !Object.hasOwn(guides, page)) {

        return 'home';
    }

    return page;
}


/* =========================================
   08. UPDATE NAVIGATION & BREADCRUMBS
   ========================================= */

function updateNavigation(page) {

    // Hide navigation on the homepage.
    navigation.hidden = page === 'home';

    // Only display first-time setup on the homepage.
    setupCard.hidden = page !== 'home';

    // Set the Back button destination.
    backButton.href = '#' + (parents[page] || 'home');

    // Build the breadcrumb trail.
    const trail = [];

    let node = page;

    while (node) {
        trail.unshift(labels[node]);
        node = parents[node];
    }

    breadcrumb.textContent = trail.join(' / ');
}


/* =========================================
   09. RENDER OPTION CARD
   ========================================= */

function renderOption(option) {

    const [id, title, description, icon] = option;

    return `
        <a class="option" href="#${id}">

            <span class="option-icon">

                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                >
                    ${icons[icon]}
                </svg>

            </span>

            <strong>${title}</strong>

            <small>${description}</small>

            <span class="arrow" aria-hidden="true">
                →
            </span>

        </a>
    `;
}


/* =========================================
   10. RENDER MENU PAGES
   ========================================= */

function renderMenu(page) {

    const menu = menus[page];

    content.innerHTML = `

        <div class="screen-heading">

            <h2 id="screen-title" tabindex="-1">
                ${menu.title}
            </h2>

            <p class="subtitle">
                ${menu.subtitle}
            </p>

        </div>

        <div class="options">

            ${menu.options.map(renderOption).join('')}

        </div>

    `;
}


/* =========================================
   11. RENDER STEP ACTION BUTTON
   ========================================= */

function renderStepButton(page, index) {

    // Setup Step 1: PaperCut Portal
    if (page === 'setup' && index === 0) {
        return `
            <a
                class="setup-button step-action-button"
                href="${portalUrl}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Open PaperCut Portal ↗
            </a>
        `;
    }

    // Android Step 2: Mobility Print App
    if (page === 'android' && index === 1) {
        return `
            <a
                class="setup-button step-action-button"
                href="https://play.google.com/store/apps/details?id=com.papercut.projectbanksia&hl=en&pli=1"
                target="_blank"
                rel="noopener noreferrer"
            >
                Get Mobility Print ↗
            </a>
        `;
    }

    return '';
}


/* =========================================
   12. RENDER INSTRUCTION IMAGES
   ========================================= */

function renderStepImage(page, index, title, img) {

    // Instructions that do not require images.
    if (
    (page === 'setup' && index < 2) ||
    (title === 'Connect to Wi-Fi') ||
    (title === 'Set up mobile printing') ||
    (title === 'Open your document') ||
    (title === 'Print your document') ||
    (title === 'Connect to the network')||
    (title === 'Load your document')
    
) {
    return '';
}
    // Display multiple images side by side.
    if (Array.isArray(img)) {
        return `
            <div class="step-images">
                ${img.map((src, i) => `
                    <img
                        class="step-image"
                        src="${src}"
                        alt="${title} - Image ${i + 1}"
                        loading="lazy"
                    >
                `).join('')}
            </div>
        `;
    }

    // Display a single image.
    if (img) {
        return `
            <img
                class="step-image"
                src="${img}"
                alt="${title}"
                loading="lazy"
            >
        `;
    }

    // Display a placeholder.
    return `
        <div class="image-placeholder">
            Step ${index + 1} — Add photograph here
        </div>
    `;
}


/* =========================================
   13. RENDER INDIVIDUAL INSTRUCTION STEPS
   ========================================= */

function renderStep(page, step, index) {

    const [title, description, img] = step;
    const buttonHtml = renderStepButton(page, index);

    return `
        <li>

            <div>

                <div class="${buttonHtml ? 'step-row' : ''}">
                    <div class="step-copy">
                        <h3>${title}</h3>
                        <p>${description}</p>
                    </div>

                    ${buttonHtml}
                </div>

                ${renderStepImage(page, index, title, img)}

            </div>

        </li>
    `;
}

/* =========================================
   14. RENDER SETUP COMPLETION MESSAGE
   ========================================= */

function renderSetupComplete(page) {

    // Only display this message on the setup page.
    if (page !== 'setup') {
        return '';
    }

    return `
        <div class="setup-complete">

            <strong>Setup complete</strong>

            <p>
                Once your ID and password are set up,
                return to the homepage for printing
                or scanning instructions.
            </p>

        </div>
    `;
}


/* =========================================
   15. RENDER INSTRUCTION PAGES
   ========================================= */

function renderGuide(page) {

    const guide = guides[page];

    const steps = guide.steps
        .map((step, index) => renderStep(page, step, index))
        .join('');

    content.innerHTML = `

        <article class="guide">

            <h2 id="screen-title" tabindex="-1">
                ${guide.title}
            </h2>

            <p class="subtitle">
                Follow the steps below.
            </p>

            <ol class="steps">

                ${steps}

            </ol>

            ${renderSetupComplete(page)}

            <a class="return-home" href="#home">
                Return to homepage
            </a>

        </article>

    `;
}


/* =========================================
   16. MAIN RENDER FUNCTION
   ========================================= */

function render() {

    const page = getCurrentPage();

    updateNavigation(page);

    // Display either a menu or an instruction page.
    if (Object.hasOwn(menus, page)) {
        renderMenu(page);
    } else {
        renderGuide(page);
    }

    // Update the browser tab title.
    document.title = `${labels[page]} | Printer Help Center`;
}


/* =========================================
   17. PAGE CHANGE EVENT
   ========================================= */

window.addEventListener('hashchange', () => {

    render();

    // Scroll to the top of the new page.
    window.scrollTo(0, 0);

    // Move keyboard focus to the page heading.
    const screenTitle = document.getElementById('screen-title');

    if (screenTitle) {
        screenTitle.focus({ preventScroll: true });
    }

});


/* =========================================
   18. INITIALIZE WEBSITE
   ========================================= */

render();
