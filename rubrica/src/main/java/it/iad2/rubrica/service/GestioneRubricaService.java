/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.service;

import it.iad2.rubrica.model.Contatto;
import java.util.List;

/**
 *
 * @author lenovo
 */
public interface GestioneRubricaService {

    List<Contatto> aggiungi(Contatto c);

    List<Contatto> rimuovi(Contatto c);

    List<Contatto> aggiornaLista();

    long contaElementi();
    
    List<Contatto> cerca(String criterio);

}
