function run() {
    const htmlCode = document.getElementById('html-code').value;
    const cssCode = document.getElementById('css-code').value;
    const jsCode = document.getElementById('js-code').value;
    const outputFrame = document.getElementById('output-frame');

    const outputDocument = outputFrame.contentDocument || outputFrame.contentWindow.document;

    // Combine HTML, CSS, and JS into a single HTML document
    const completeCode = `
        <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}<\/script>
            </body>
        </html>
    `;

    // Write the combined code to the iframe's document
    outputDocument.open();
    outputDocument.write(completeCode);
    outputDocument.close();
}
