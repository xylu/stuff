package com.example;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DemoApplication {

    @Value("${foo.bar}")
    void fooBar(String fooBar) {
        System.out.println("Foobar: " + fooBar);
    }

    @Value("${bar.foo}")
    void barFoo(String barFoo) {
        System.out.println("barFoo: " + barFoo);
    }

    @Value("${cafebar}")
    void cafebar(String cafebar) {
        System.out.println("cafebar: " + cafebar);
    }

    @Value("${defualtProp}")
    void defualtProp(String defualtProp) {
        System.out.println("defualtProp: " + defualtProp);
    }

    public static void main(String[] args) {

        SpringApplication.run(DemoApplication.class, args);


//CONFIGURATION
//1. run with --foo.bar=foobar
//   set environment variable bar_foo=bar.foo
//2. check outoverriding cafebar property
//3.  run with --spring.profiles.active=myEnv to test profiles


// To test configuration uncomment

//		new SpringApplicationBuilder()
//				.web(false)
//				.sources(DemoApplication.class)
//				.run(args);

    }
}
