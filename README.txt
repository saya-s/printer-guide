PRINTER HELP CENTER
Open index.html in your browser. No installation or internet connection required.
Edit style.css for colors and layout, script.js for menus and instructions, index.html for branding and footer.
To add a photo, place it in assets/images/ and add a third value to a guide step, e.g. ['Log in','Sign in at the printer.','assets/images/login.jpg'].
All instructions are draft examples. Verify printer models, queue names, login and scan destinations before deployment. Remove the draft note and unused image placeholders when complete.
Host the entire folder on the approved company web server and test access on employee phones before generating a QR code.

First-Time Setup: the homepage links to #setup. The setup guide and portal URL are in script.js. The portal requires access to the company network and a trusted HTTPS certificate. Verify the exact ID and password labels before publishing.
Local testing: run python -m http.server 8000 --bind 127.0.0.1 in this folder, then open http://localhost:8000.
