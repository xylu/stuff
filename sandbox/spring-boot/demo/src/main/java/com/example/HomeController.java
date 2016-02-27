package com.example;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * author: xylo
 */
@RestController
public class HomeController {

    @RequestMapping("/")
    @ResponseBody
    String home(){

        return "Hello World test";
    }
}
