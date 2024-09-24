package com.domain.config;

import com.domain.model.PersonModel;
import com.domain.repository.PersonRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class PersonConfig {

    @Autowired
    private PersonRepository repository;

    @PostConstruct
    public void setup() {
        PersonModel person1 = new PersonModel();
        person1.setFirstName("Unem");
        person1.setLastName("Ployed");

        PersonModel person2 = new PersonModel();
        person2.setFirstName("Dee");
        person2.setLastName("Veloper");

        repository.saveAll(Arrays.asList(
                person1,
                person2
        ));
    }
}
