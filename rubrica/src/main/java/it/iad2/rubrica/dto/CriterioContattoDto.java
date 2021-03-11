package it.iad2.rubrica.dto;

import it.iad2.rubrica.model.Contatto;

public class CriterioContattoDto {
    private Contatto contatto;
    private String criterio;

    public CriterioContattoDto() {
    }

    public CriterioContattoDto(Contatto contatto, String criterio) {
        this.contatto = contatto;
        this.criterio = criterio;
    }

    public Contatto getContatto() {
        return contatto;
    }

    public void setContatto(Contatto contatto) {
        this.contatto = contatto;
    }

    public String getCriterio() {
        return criterio;
    }

    public void setCriterio(String criterio) {
        this.criterio = criterio;
    }

    @Override
    public String toString() {
        return "CriterioContattoDto{" +
                "contatto=" + contatto +
                ", criterio='" + criterio + '\'' +
                '}';
    }
}
