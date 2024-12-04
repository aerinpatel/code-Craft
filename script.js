function run(){
            const htmlCode = document.getElementById('html-code');
            const cssCode = document.getElementById('css-code');
            const jsCode = document.getElementById('js-code');
            const outputFrame = document.getElementById('output-frame');
            
            outputFrame.contentDocument.body.innerHTML = htmlCode.value + '<style>' + cssCode.value + '</style>';
            outputFrame.contentwindow.eval(jsCode.value);
        }