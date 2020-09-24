(function() {
  const anchors = new AnchorJS({
    placement: "left",
    ariaLabel: "Copy URL"
  });

  anchors.add();

  // Figure out how to update the clipboard on each click
  function copy(element) {
    return function (event) {
      const href = element.href;
      let tmpElement = document.createElement("textarea");
      tmpElement.innerText = href;
      tmpElement.select();
      document.execCommand("copy");
    }
  }

  const anchorLinks = document.getElementsByClassName("anchorjs-link");

  for (let i = 0; i < anchorLinks.length; i++) {
    const anchorLink = anchorLinks[i];
    anchorLink.addEventListener('click', copy(anchorLink));
  }
})();

$( document ).ready(function() {
  $( ".anchorjs-link" ).click(function() {    
    var pageurl = window.location.href;
    console.log(pageurl);
    var pageurl = pageurl.split('#')[0];
    console.log(pageurl);
    ext = $(this).attr('href');
    console.log(ext);
    url = pageurl+ext;
    console.log(url);
    var temp = document.createElement('input');
document.body.appendChild(temp);

temp.value = url;
temp.select();
document.execCommand('copy');
document.body.removeChild(temp);


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
