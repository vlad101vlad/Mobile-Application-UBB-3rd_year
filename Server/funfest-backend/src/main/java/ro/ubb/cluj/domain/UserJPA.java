package ro.ubb.cluj.domain;

import javax.persistence.*;

@Entity
@Table(name = "User")
public class UserJPA {
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    Long id;

    String username;
    String password;

    public UserJPA(Long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public UserJPA() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "UserJPA{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
