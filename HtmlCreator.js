    let html;
    let title;
    let text;
    let bgweb;
    let rcss;
    let colortxt;
    let font;
    let talign;
    function settitle(){
        title = document.getElementById("title_e").value;
    }

    function settext(){
        text = document.getElementById("text").value;
    }

    function setbgcolor(){
        bgweb = document.getElementById("bgcolor").value;
    }

    function settxtcolor(){
        colortxt = document.getElementById("txtcolor").value;
    }

    function settxtfont(){
        font = document.getElementById("txtfont").value;
    }

    function getAlign(){
        talign = document.getElementById("txtalign").value;
    }

    

    function Create_W(){
        html = "<Html><head><link rel='stylesheet' href='herro.css'>";
        html += "<link rel='icon' type='image/x-icon'  href='creator.png'><title>"
        html+= title;
        html += "</title></head><body class ='tuff'><h1>"
        html += text;
        html += "</h1></body></html>"

        rcss = ""
        rcss +=".tuff{background-color:"
        rcss += bgweb
        rcss += ";} h1{color:"
        rcss += colortxt
        rcss += ";"
        rcss += "font-family:"
        rcss += font
        rcss += ";"
        rcss += "text-align:"
        rcss += selectedalign
        rcss += ";}"
    }
    
    
    
    
    function downloadFile(filename, mimeType) {
        const website = new Blob([html], { type: mimeType });
        const url = URL.createObjectURL(website);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a); // Append to body (optional, for visibility)
        a.click();
        document.body.removeChild(a); // Clean up
        URL.revokeObjectURL(url); // Release the object URL

    }

    function downloadImage(imageUrl, filename) {
    fetch(imageUrl)
        .then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        })
        .catch(err => console.error("Download failed:", err));
    }

    function CSS_W(filename,mimeType){
        const stylesheet = new Blob([rcss], { type: mimeType });
        const url2 = URL.createObjectURL(stylesheet);
        const a2 = document.createElement('a');
        a2.href = url2;
        a2.download = filename;
        document.body.appendChild(a2); // Append to body (optional, for visibility)
        a2.click();
        document.body.removeChild(a2); // Clean up
        URL.revokeObjectURL(url2); // Release the object URL
    }

    function download_W(){
        downloadFile('herro.html','text/plain');
        CSS_W('herro.css','text/plain');
        downloadImage('https://i.scdn.co/image/ab67616d0000b273aa10e1385ba90132bd774f3c', 'creator.png');
    }

    function settxtalign(){
        const selectedRadio = document.querySelector('input[name="txtalign"]:checked');

        if (selectedRadio) {
            selectedalign = selectedRadio.value;
        } else {
            selectedalign = "center"
        }
    }
