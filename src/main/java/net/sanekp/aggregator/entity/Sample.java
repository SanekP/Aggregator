package net.sanekp.aggregator.entity;

import java.time.LocalDateTime;
import java.time.ZoneId;

/**
 * Created by Sanek on 4/4/2017.
 */
public class Sample {
    public String id;
    public LocalDateTime timestamp = LocalDateTime.now(ZoneId.of("UTC"));
    public String value;
}
