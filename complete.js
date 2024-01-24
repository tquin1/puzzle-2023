$(document).ready(function () {
  function redirect() {
    $("body").addClass("screen-shake");
    setTimeout(function () {
      $("body").addClass("transition");

      var anchor = window.location.hash.substr(1);

      var redirectUrls = {
        "1": "https://docs.google.com/document/d/1R0cX9XhamdCth8MqSwWUeq-NLSiqvq4Saqr6uOUVSMM/edit",
        "2": "https://docs.google.com/document/d/1hBZSSAGDp17Wc95uTWP2KXZ0Ax6Ph4OTjzFFK6NrouQ/edit",
        "3": "https://docs.google.com/document/d/1O6ylYpXCLHOdcqX5pla9CaKgXCVXGgee2NSvuvEw_lM/edit",
        "4": "https://docs.google.com/document/d/1aPNMBak8r14lnUMj2DC4jlzw9Asi3fcLgNIV1Me97u0/edit",
      };

      if (redirectUrls.hasOwnProperty(anchor)) {
        window.location.href = redirectUrls[anchor];
      } else {
        window.location.href = "https://example.com";
      }
    }, 1000);
  }

  function checkForComplete() {
    if ($(".complete").length > 0) {
      setTimeout(redirect, 1000);
    } else {
      setTimeout(checkForComplete, 50);
    }
  }

  checkForComplete();
});
