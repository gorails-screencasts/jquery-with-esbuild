// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"

import "./src/jquery"
import "./src/jquery-ui"

$(function() {
  console.log("hello world")
  $( "#dialog" ).dialog();
  $( document ).tooltip();
  $( "#tabs" ).tabs();
})
