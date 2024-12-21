package WebBeadando.Library.system.controller;
import WebBeadando.Library.system.data.entity.KonyvekEntity;
import WebBeadando.Library.system.data.repository.KonyvekRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/konyvek")
public class KonyvekController {

    @Autowired
    private KonyvekRepository konyvekRepository;



    @GetMapping("")
    public ResponseEntity<List<KonyvekEntity>> getAllKonyvek() {
        try {
            List<KonyvekEntity> konyvek = konyvekRepository.findAll();
            return ResponseEntity.ok(konyvek);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }

    @GetMapping("/{id}")
    public KonyvekEntity getKonyv(@PathVariable("id") int id){

        KonyvekEntity konyv = konyvekRepository.findById(id).orElseThrow(() ->
                new RuntimeException("Könyv nem található az ID alapján:  " + id));

        return konyv;
    }


    @PostMapping("")
    public KonyvekEntity saveKonyv(@RequestBody KonyvekEntity konyv){
        return konyvekRepository.save(konyv);
    }

    @DeleteMapping("/{id}")
    public void deleteKonyv(@PathVariable("id") int id){
        konyvekRepository.deleteById(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> editKonyv(@PathVariable("id") int id, @RequestBody KonyvekEntity updatedKonyv) {
        try {
            KonyvekEntity existingKonyv = konyvekRepository.findById(id).orElseThrow(() ->
                    new RuntimeException("Könyv nem található az ID alapján: " + id)
            );

            // Frissítjük az attribútumokat
            existingKonyv.setNev(updatedKonyv.getNev());
            existingKonyv.setDarab(updatedKonyv.getDarab());
            existingKonyv.setIro(updatedKonyv.getIro());

            KonyvekEntity savedKonyv = konyvekRepository.save(existingKonyv);
            return ResponseEntity.ok(savedKonyv);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Frissítési hiba történt.");
        }
    }

}

