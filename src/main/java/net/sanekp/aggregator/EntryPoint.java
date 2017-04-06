package net.sanekp.aggregator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

/**
 * Created by Sanek on 4/4/2017.
 */
@SpringBootApplication
public class EntryPoint extends SpringBootServletInitializer {
    public static void main(String[] args) {
        SpringApplication.run(EntryPoint.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(EntryPoint.class);
    }
}
