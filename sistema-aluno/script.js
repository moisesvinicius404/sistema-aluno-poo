  
    class Aluno {
      constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
      }

      validar() {
        if (!this.nome || this.nome.trim() === "") {
          return { valido: false, mensagem: "Nome não pode estar vazio." }
        }
        if (!this.idade || this.idade <= 0) {
          return { valido: false, mensagem: "Idade deve ser maior que 0." }
        }
        return { valido: true }
      }
    }


    class AlunoView {
      static mostrarMensagem(texto, cor = "black") {
        const msg = document.querySelector(".mensagem")
        msg.textContent = texto
        msg.style.color = cor
      }

      static listarAluno(aluno) {
        const lista = document.getElementById("listaAlunos")
        const li = document.createElement("li")
        li.textContent = `${aluno.nome} - ${aluno.idade} anos`
        lista.appendChild(li)
      }
    }

 
    document.getElementById("formAluno").addEventListener("submit", (e) => {
      e.preventDefault()

      const nome = document.getElementById("nome").value
      const idade = parseInt(document.getElementById("idade").value)

  
      const aluno = new Aluno(nome, idade)

      
      const validacao = aluno.validar()
      if (!validacao.valido) {
        AlunoView.mostrarMensagem(validacao.mensagem, "red")
        return
      }

      
      AlunoView.listarAluno(aluno)
      AlunoView.mostrarMensagem("Aluno cadastrado com sucesso!", "green")

      
      document.getElementById("formAluno").reset()
    })
  