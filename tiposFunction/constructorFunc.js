// Função construtora -> objetos
// Função fabrica -> objetos
// Construtora -> Pessoa (new) sempre letra maiuscula
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados
    // const ID = 123456;
    // const metodoInterno = function() {};
  
    // Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
  
    this.metodo = function() {
      console.log(this.nome + ': sou um método');
    };
  }
  
  const p1 = new Pessoa('Carlos', 'Eduardo');
  const p2 = new Pessoa('Maria', 'Oliveira');
  p1.metodo();
  p2.metodo();