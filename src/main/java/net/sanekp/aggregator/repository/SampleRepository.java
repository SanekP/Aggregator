package net.sanekp.aggregator.repository;

import net.sanekp.aggregator.entity.Sample;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * Created by Sanek on 4/4/2017.
 */
@RepositoryRestResource
public interface SampleRepository extends MongoRepository<Sample, String> {
}
