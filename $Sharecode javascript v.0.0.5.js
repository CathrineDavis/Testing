javascript:Selectionvar=window.getSelection().toString();
sharecode=Selectionvar.split(/\r\n|\r|\n/g, 2)[1].slice(Selectionvar.split(/\r\n|\r|\n/g, 2)[1].indexOf("/"), Selectionvar.split(/\r\n|\r|\n/g, 2)[1].length)
if (!("/" in sharecode)) {
        sharecode=Selectionvar.split(/\r\n|\r|\n/g, 2)[2].slice(Selectionvar.split(/\r\n|\r|\n/g, 2)[2].indexOf("/"), Selectionvar.split(/\r\n|\r|\n/g, 2)[2].length)
}
function(){window.open("http"+Selectionvar.split("http", 2)[1].split(/\n/, 2)[0]+sharecode)}
