(function breadcrumbs(){
    var baseurl = window.location.protocol + "//" + window.location.host;
    var pathArray = window.location.pathname.split( '/' );
    var data = {
			  "@context": "http://schema.org",
			  "@type": "BreadcrumbList",
			  "itemListElement" : []
			};
    for (var i = 0; i < pathArray.length ; i++) {
      console.log("\n"+pathArray[i]);
      var name = pathArray[i];
      if(pathArray[i]==""){
      	name = "HOME";
      }
      data.itemListElement.push({
      	"@type": "ListItem",
		"position": i+1,
	    "item": {
	      "@id": baseurl+"/"+pathArray[i],
	      "name": name
	    }
      });
    }

    var datastr = JSON.stringify(data);
    var s = document.createElement('script');
    s.type = "application/ld+json";
    s.innerHTML = datastr;
    document.getElementsByTagName('head')[0].appendChild(s);
})(document);