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
