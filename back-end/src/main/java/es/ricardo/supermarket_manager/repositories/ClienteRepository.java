package es.ricardo.supermarket_manager.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import es.ricardo.supermarket_manager.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{
	@Query("SELECT t FROM Cliente t where t.nombre = :name") 
    List<Cliente> findByNombre(@Param("name") String strNombre);
}
