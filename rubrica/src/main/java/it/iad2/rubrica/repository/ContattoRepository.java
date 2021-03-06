/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.repository;

import it.iad2.rubrica.model.Contatto;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author lenovo
 */
public interface ContattoRepository extends JpaRepository<Contatto, Long> {
    public List<Contatto> findByNomeContainsOrCognomeContainsOrNumeroContains(String nome, String cognome, String  numero);
}
