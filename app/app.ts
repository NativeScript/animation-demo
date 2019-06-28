import * as application from "application";
import * as trace from "trace";

trace.enable();
trace.setCategories(trace.categories.concat(trace.categories.Animation));

application.run({ moduleName: "app-root" });
