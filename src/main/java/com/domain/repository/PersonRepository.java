package com.domain.repository;

import com.domain.model.PersonModel;
import org.springframework.data.repository.CrudRepository;

public interface PersonRepository extends CrudRepository<PersonModel, Long> {
}
