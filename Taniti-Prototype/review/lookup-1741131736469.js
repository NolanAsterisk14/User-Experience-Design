(function(window, undefined) {
  var dictionary = {
    "dc167ed4-34e1-431e-8bdb-c14a0521ed25": "Restraunts&Grocery",
    "bc1b2921-41a7-424e-9d7f-1fdf350ab4d1": "Transportation",
    "45ec266d-0a10-4857-b9c7-55e4c8e40568": "Lodging",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "ae121b77-8417-4678-9f4d-dda1abf63261": "Attractions",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);