/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.dto;

/**
 *
 * @author lenovo
 */
public class ContaDto {

    long contatore;

    public ContaDto() {
    }

    public ContaDto(long contatore) {
        this.contatore = contatore;
    }

    public long getContatore() {
        return contatore;
    }

    public void setContatore(long contatore) {
        this.contatore = contatore;
    }

    @Override
    public String toString() {
        return "ContaDto{" + "contatore=" + contatore + '}';
    }

    
    
}
