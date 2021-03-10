/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.controller;

import it.iad2.rubrica.dto.ContaDto;
import it.iad2.rubrica.dto.ContattoDto;
import it.iad2.rubrica.dto.CriterioDto;
import it.iad2.rubrica.dto.ListaContattiDto;
import it.iad2.rubrica.service.GestioneRubricaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author lenovo
 */
@CrossOrigin("*")
@RestController
public class RubricaController {

    @Autowired
    GestioneRubricaService rubricaService;

    @RequestMapping("/aggiungi")
    @ResponseBody
    public ListaContattiDto aggiungiContatto(@RequestBody ContattoDto dto) {
        ListaContattiDto lista = new ListaContattiDto();
        lista.setListaContatti(rubricaService.aggiungi(dto.getContatto()));
        return lista;
    }

    @RequestMapping("/rimuovi")
    @ResponseBody
    public ListaContattiDto rimuoviContatto(@RequestBody ContattoDto dto) {
        ListaContattiDto lista = new ListaContattiDto();
        lista.setListaContatti(rubricaService.rimuovi(dto.getContatto()));
        return lista;
    }

    @RequestMapping("/aggiorna")
    @ResponseBody
    public ListaContattiDto aggiornaLista() {
        ListaContattiDto lista = new ListaContattiDto();
        lista.setListaContatti(rubricaService.aggiornaLista());
        return lista;
    }

    @RequestMapping("/conta")
    @ResponseBody
    public ContaDto contaContatti() {
        ContaDto contatore = new ContaDto();
        contatore.setContatore(rubricaService.contaElementi());
        return contatore;

    }

    @RequestMapping("/cerca")
    @ResponseBody
    public ListaContattiDto cercaContatti(@RequestBody CriterioDto dto) {
        ListaContattiDto lista = new ListaContattiDto();
        lista.setListaContatti(rubricaService.cerca(dto.getCriterio()));
        return lista;
    }
}
