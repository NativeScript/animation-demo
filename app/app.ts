import application = require("application");
import trace = require("trace");

trace.enable();
trace.setCategories(trace.categories.concat(trace.categories.Animation));
application.start("main-page");
