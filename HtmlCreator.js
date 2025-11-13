    let html;
    let title;
    let text;
    let bgweb;
    let rcss;
    let colortxt;
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

    function Create_W(){
        html = "<Html><head><link rel='stylesheet' href='herro.css'><title>";
        html+= title;
        html += "</title></head><body class ='tuff'><h1>"
        html += text;
        html += "</h1></body></html>"

        rcss = ""
        rcss +=".tuff{background-color:"
        rcss += bgweb
        rcss += ";} h1{color:"
        rcss += colortxt
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
        
    }
