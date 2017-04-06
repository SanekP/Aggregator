package net.sanekp.aggregator.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Sanek on 4/6/2017.
 */
@Controller
@RequestMapping("/")
public class HomeController {
    @GetMapping
    public String index() {
        return "index";
    }
}
