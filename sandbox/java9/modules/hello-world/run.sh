rm -vr target
javac -d target/classes src/main/java/com/xylu/java9/hello/HelloWorld.java  src/main/java/module-info.java
jar --create --file target/hello-world.jar --main-class com.xylu.java9.hello.HelloWorld -C target/classes .
java --module-path target/hello-world.jar --module com.xylu.java9.hello_world
