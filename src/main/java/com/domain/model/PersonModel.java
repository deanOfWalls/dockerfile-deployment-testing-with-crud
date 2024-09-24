package com.domain.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class PersonModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // Use Jakarta persistence annotations
    private Long id;

    private String firstName;
    private String lastName;
    private Date birthDate;

    // Constructors
    public PersonModel() {
    }

    public PersonModel(Long id, String firstName, String lastName, Date birthDate) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
    }

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }
}
