/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.dto;

import it.iad2.rubrica.model.Contatto;
import java.util.List;

/**
 *
 * @author lenovo
 */
public class ListaContattiDto {
    
    private List<Contatto> listaContatti;

    public ListaContattiDto() {
    }

    public ListaContattiDto(List<Contatto> listaContatti) {
        this.listaContatti = listaContatti;
    }

    public List<Contatto> getListaContatti() {
        return listaContatti;
    }

    public void setListaContatti(List<Contatto> listaContatti) {
        this.listaContatti = listaContatti;
    }

    @Override
    public String toString() {
        return "ListaContattiDto{" + "listaContatti=" + listaContatti + '}';
    }
    
    
    
}
