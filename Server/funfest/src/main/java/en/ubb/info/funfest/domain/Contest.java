package en.ubb.info.funfest.domain;

import javax.persistence.*;
import java.util.UUID;

@Entity
@Table(name = "CONTEST")
public class Contest {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID uuid;

    @Column(name = "description", length = 500, nullable = false, unique = false)
    private String description;

}
