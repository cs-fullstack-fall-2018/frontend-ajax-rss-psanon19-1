function main() {
    var number10 = 10;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4) {
            if(this.status === 200)
            {
                //Start here
                let xml = this.responseText;
                xmlDoc = $.parseXML(xml);
                $xml = $(xmlDoc);

                //console.log($xml.text());

                //responseHTML.innerText = $xml.find("channel > title").text();
                // $(".root").append($xml.find("channel > title").text());

                //
                // // RSS Title
                $rssTitle = $xml.find( "channel > title" ).text();
                console.log($rssTitle);

                $xml.find("item").each(function()
                {
                    //Do something with item here...
                    var $this = $(this),
                        item = {
                            title: $this.find("title").text(),
                            guid: $this.find("guid").text(),
                            summary: $this.find("summary").text()
                        };

                    for(linkCounter=1;linkCounter<number10;linkCounter++) {
                        $(".root").append("<div class='meat'>" + "<h3>" + item.title + "</h3>" + "</div>").append("<a href='" + item.guid + "' target='_blank'>" + item.guid + "</a>");
                    }


                });

            }
            else
            {
                alert("ERROR RETRIEVING FILE! Status: " + this.status);
            }

        }
    };

    // To get a simple text file
    //xhttp.open("GET", "ajax_info1.txt", true);

    // To prevent caching your page by adding a random number at the end
    //xhttp.open("GET", "ajax_info.txt?nocache="+Math.random(), true);

    // To prevent caching. More official way to prevent caching
    xhttp.open("GET", "rsspodcast.xml", true);
    xhttp.setRequestHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
    xhttp.setRequestHeader("Pragma", "no-cache"); // HTTP 1.0.
    xhttp.setRequestHeader("Expires", "0"); // Proxies.
    xhttp.send();
}


main();