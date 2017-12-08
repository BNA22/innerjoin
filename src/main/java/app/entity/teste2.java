package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela TESTE2
 * @generated
 */
@Entity
@Table(name = "\"TESTE2\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.teste2")
public class teste2 implements Serializable {

  /**
   * UID da classe, necessário na serialização
   * @generated
   */
  private static final long serialVersionUID = 1L;

  /**
   * @generated
   */
  @Id
  @Column(name = "id", nullable = false, insertable=true, updatable=true)
  private java.lang.String id = UUID.randomUUID().toString().toUpperCase();

  /**
  * @generated
  */
  @Column(name = "email", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String email;

  /**
  * @generated
  */
  @Column(name = "telefone", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String telefone;

  /**
  * @generated
  */
  @ManyToOne
  @JoinColumn(name="fk_teste1", nullable = true, referencedColumnName = "id", insertable=true, updatable=true)
  
  private teste1 teste1;

  /**
   * Construtor
   * @generated
   */
  public teste2(){
  }


  /**
   * Obtém id
   * return id
   * @generated
   */
  
  public java.lang.String getId(){
    return this.id;
  }

  /**
   * Define id
   * @param id id
   * @generated
   */
  public teste2 setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém email
   * return email
   * @generated
   */
  
  public java.lang.String getEmail(){
    return this.email;
  }

  /**
   * Define email
   * @param email email
   * @generated
   */
  public teste2 setEmail(java.lang.String email){
    this.email = email;
    return this;
  }

  /**
   * Obtém telefone
   * return telefone
   * @generated
   */
  
  public java.lang.String getTelefone(){
    return this.telefone;
  }

  /**
   * Define telefone
   * @param telefone telefone
   * @generated
   */
  public teste2 setTelefone(java.lang.String telefone){
    this.telefone = telefone;
    return this;
  }

  /**
   * Obtém teste1
   * return teste1
   * @generated
   */
  
  public teste1 getTeste1(){
    return this.teste1;
  }

  /**
   * Define teste1
   * @param teste1 teste1
   * @generated
   */
  public teste2 setTeste1(teste1 teste1){
    this.teste1 = teste1;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    teste2 object = (teste2)obj;
    if (id != null ? !id.equals(object.id) : object.id != null) return false;
    return true;
  }

  /**
   * @generated
   */
  @Override
  public int hashCode() {
    int result = 1;
    result = 31 * result + ((id == null) ? 0 : id.hashCode());
    return result;
  }

}
