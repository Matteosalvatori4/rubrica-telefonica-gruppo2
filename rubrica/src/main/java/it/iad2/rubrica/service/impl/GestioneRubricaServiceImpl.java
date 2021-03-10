/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.service.impl;

import it.iad2.rubrica.model.Contatto;
import it.iad2.rubrica.repository.ContattoRepository;
import it.iad2.rubrica.service.GestioneRubricaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author lenovo
 */
@Service
public class GestioneRubricaServiceImpl implements GestioneRubricaService {

    @Autowired
    ContattoRepository contattoRepository;

    @Override
    public List<Contatto> aggiungi(Contatto c) {
        contattoRepository.save(c);
        return aggiornaLista();
    }

    @Override
    public List<Contatto> rimuovi(Contatto c) {
        contattoRepository.delete(c);
        return aggiornaLista();
    }

    @Override
    public List<Contatto> aggiornaLista() {
        return contattoRepository.findAll();
    }

    @Override
    public long contaElementi() {
        return contattoRepository.count();
    }

    @Override
    public List<Contatto> cerca(String criterio) {
      return contattoRepository.findByNomeContainsOrCognomeContainsOrNumeroContains(criterio, criterio, criterio);
    }
}
