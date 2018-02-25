
module com.xylu.java9.hello_world {
    // this module only needs types from the base module 'java.base';
    // because every Java module needs 'java.base', it is not necessary
    // to explicitly require it - I do it nonetheless for demo purposes
    requires java.base;
    // this export makes little sense for the application,
    // but once again, I do this for demo purposes
    exports com.xylu.java9.hello;
}
