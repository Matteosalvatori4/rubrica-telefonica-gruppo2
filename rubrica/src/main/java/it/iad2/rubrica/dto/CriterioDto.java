/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package it.iad2.rubrica.dto;

/**
 *
 * @author utente
 */
public class CriterioDto {
    private String criterio;

    public CriterioDto(String criterio) {
        this.criterio = criterio;
    }

    public CriterioDto() {
    }

    public String getCriterio() {
        return criterio;
    }

    public void setCriterio(String criterio) {
        this.criterio = criterio;
    }

    @Override
    public String toString() {
        return "CriterioDto{" + "criterio=" + criterio + '}';
    }
    
}
