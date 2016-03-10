package com.example;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

/**
 * author: xylo
 */

@Component
@Profile("myEnv")
public class EnvSpecificBean {

    @Value("${envValue}")
    private String envValue;

    @PostConstruct
    public void init() {
        System.out.println(EnvSpecificBean.class.getSimpleName() + " initialized with envValue: " + envValue);
    }


}
