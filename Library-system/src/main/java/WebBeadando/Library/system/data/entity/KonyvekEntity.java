package WebBeadando.Library.system.data.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "konyvek")
public class KonyvekEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idkonyvek;

    @Column(name = "Nev", nullable = false, length = 45)
    private String nev;

    @Column(name = "Darab")
    private Integer darab;

    @Column(name = "Író", length = 45)
    private String iro;

    // Default constructor
    public KonyvekEntity() {}

    // Getters and Setters
    public Integer getIdkonyvek() {
        return idkonyvek;
    }

    public void setIdkonyvek(Integer idkonyvek) {
        this.idkonyvek = idkonyvek;
    }

    public String getNev() {
        return nev;
    }

    public void setNev(String nev) {
        this.nev = nev;
    }

    public Integer getDarab() {
        return darab;
    }

    public void setDarab(Integer darab) {
        this.darab = darab;
    }

    public String getIro() {
        return iro;
    }

    public void setIro(String iro) {
        this.iro = iro;
    }
}
