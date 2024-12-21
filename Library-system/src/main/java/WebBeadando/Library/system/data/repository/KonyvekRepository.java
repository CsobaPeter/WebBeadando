package WebBeadando.Library.system.data.repository;

import WebBeadando.Library.system.data.entity.KonyvekEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KonyvekRepository extends JpaRepository<KonyvekEntity, Integer> {
}
