/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.dto;

import it.iad2.rubrica.model.Contatto;

/**
 *
 * @author lenovo
 */
public class ContattoDto {
    
    private Contatto contatto;

    public ContattoDto() {
    }

    public ContattoDto(Contatto contatto) {
        this.contatto = contatto;
    }

    public Contatto getContatto() {
        return contatto;
    }

    public void setContatto(Contatto contatto) {
        this.contatto = contatto;
    }

    @Override
    public String toString() {
        return "ContattoDto{" + "contatto=" + contatto + '}';
    }
    
    
    
}
