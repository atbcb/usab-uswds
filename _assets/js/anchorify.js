(function() {
  const anchors = new AnchorJS({
    placement: "left",
    ariaLabel: "Copy URL"
  });

  anchors.add();
})();

$( document ).ready(function() {
  $( ".anchorjs-link" ).click(function() {    
    var pageurl = window.location.href;
    console.log(pageurl);
    var pageurl = pageurl.split('#')[0]; //base page link
    console.log(pageurl);
    ext = $(this).attr('href'); //specific extension  #XYZ
    console.log(ext);
    url = pageurl+ext; //link you want to copy
    console.log(url);

    //Copy To clipboard
    var temp = document.createElement('input');
    document.body.appendChild(temp);
    temp.value = url;
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);

    //visible alert


  });
});

// Previous example
// function copyLink(buttonID) {
//   //	console.log(buttonID);

//     var c = document.getElementById(buttonID).nextSibling.href;
//   //	console.log(c);

//     var el = document.createElement("textarea");
//     el.innerHTML = c;
//     el.setAttribute('readonly', '');                // Make it readonly to be tamper-proof
//     el.style.position = 'absolute';
//     el.style.left = '-9999px';                      // Move outside the screen to make it invisible
//     document.body.appendChild(el);
//    const selected =
