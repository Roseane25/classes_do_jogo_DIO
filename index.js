console.log("Escrevendo as classes de um Jogo")


class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";

        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            
        }

        const mensagem = `o ${this.tipo} atacou usando ${ataque}`;
        console.log(mensagem);
    }
}

const heroiMago = new Heroi("Frank", 23, "mago");
const heroiGuerreiro = new Heroi("Jonsom", 42, "guerreiro");
const heroiMonge = new Heroi("Ramon", 35, "monge");
const heroiNinja = new Heroi("Jack", 52, "ninja");

heroiGuerreiro.atacar();