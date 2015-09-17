var application = require("application");
var trace = require("trace");
trace.enable();
trace.setCategories(trace.categories.concat(trace.categories.Animation));
application.mainModule = "main-page";
application.start();
