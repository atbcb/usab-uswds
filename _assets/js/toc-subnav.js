(function () {
  // Table of Contents SubNavigation

  // Set page section anchors
  // TODO Add support for updating link anchor style on scroll
  // and page anchor change
  function setPageSectionAnchors(event) {
    let pageURL = event ? event.newURL : document.URL;
    let urlParsed = pageURL.split('#');
    let hasAnchor = urlParsed.length > 1;
    let currentAnchor = hasAnchor ? urlParsed[urlParsed.length - 1] : null;

    var elements = document.getElementById("standard").querySelectorAll("h3");

    if (elements) {
      for (var i = 0; i < elements.length; i++) {
        var section = elements[i].innerText;
        var idtag = section.replace(/ /g,"-");
        var currentAnchorClass = currentAnchor === idtag ?
          'class="usa-current"' : 'class=""';
        elements[i].setAttribute("id",idtag);

        var li = "<li><a " + currentAnchorClass + " href=\"#" + idtag + "\">" + section + "</a></li>";

        document.getElementById("subsections").innerHTML += li;
      };
    }
  }

  // Set sticky class for accordian state when
  // less than desktop size
  function shouldBeSticky(setSticky) {
    let element = document.getElementById('toc-aside');

    if (element) {
      let classNames = element.className.split(/\s+/);
      const stickyIdx = classNames.indexOf('sticky');
      const isSticky = stickyIdx >= 0;

      if (setSticky && !isSticky) {
        classNames.push('sticky');
        element.className = classNames.join(" ");
      }

      if (!setSticky && isSticky) {
        console.log(stickyIdx)
        classNames.splice(stickyIdx, 1)
        element.className = classNames.join(" ");
      }
    }
  }

  // Set accordion state on load
  function setSubnav() {
    let subnavButton;
    const screenWidth = window.innerWidth;
    const subnavButtons = document.querySelectorAll('[aria-controls=subnav-list]');
    const subnavContent = document.getElementById('subnav-list');

    if (subnavButtons.length > 0) {
      subnavButton = subnavButtons[0];
    }

    if (subnavButton && screenWidth < 1024) {
      shouldBeSticky(true);
      subnavButton.setAttribute('aria-expanded', false);
      subnavContent.setAttribute('hidden', '');
    }

    if (subnavButton && screenWidth >= 1024) {
      shouldBeSticky(false);
      subnavButton.setAttribute('aria-expanded', true);
      subnavContent.removeAttribute('hidden');
    }
  }

  // Set Anchors onload
  setPageSectionAnchors();
  // Add event listener on window resize
  window.addEventListener('hashchange', setPageSectionAnchors);

  // Set accordion onload
  setSubnav();
  // Add event listener on window resize
  window.addEventListener('resize', setSubnav);
})();
