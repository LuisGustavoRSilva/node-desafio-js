/**
 * POO
 * Abstração, Herança e polimosfico
 * @author Luis Gustavo Rodrigues Da Silva
 */


// Classe modelo (Iniciar sempre com letra maiúscula)
class Carro{
    //atributos
    constructor (nome,ano,cor){
        this.nome = nome
        this.ano = ano
        this.cor = cor
    }
    //açoes
    criarCarro(){
        console.log("-------------------------------------------------------")
        console.log("□ □ □ □ Veiculo criado! □ □ □ □")
        console.log("-------------------------------------------------")
        console.log("          _______      ")
        console.log("         //  ||\ \     ")
        console.log("   _____//___||_\ \____ ")
        console.log("   |   _          _    |")
        console.log("   |__/ \________/ \___|")
        console.log("   ___\_/________\_/____")
        console.log(`Nome ${this.nome}`)
        console.log(`Ano ${this.ano}`)
        console.log(`Cor ${this.cor}`)
    }
    ligar() {
        console.log("□ □ □ □ O carro está dando partida □ □ □ □ LIGOU!")
    }
    desligar(){
            console.log("O carro agora está desligado □ □ □ □ ")
    }
    acelerar(){
        console.log(" □ □ □ □ Velocidade subindo!! acelerando □ □ □ □")
    }
}

class Aviao extends Carro {
    constructor(envergadura,ano,nome){
        super(ano,nome)
        this.envergadura = envergadura
    }

    // ações
    criaraviao() {
        console.log("-------------------------------------------------")
        console.log(" □ □ □ □ Aviao Criado!  □ □ □ □ ")
        console.log("-------------------------------------------------")
        console.log("            __/\__            ")
        console.log("           `==/\==`           ")
        console.log(" ____________/__\____________ ")
        console.log("/____________________________/")
        console.log("  __||__||__/.--.\__||__||__  ")
        console.log(" /__|___|___(    )___|___|__\ ")
        console.log("           _/`--`\_           ")
        console.log("          (/------\)          ")
        console.log(`Nome: ${this.nome}`)
        console.log(`Ano: ${this.ano}`)
        console.log(`Envergadura: ${this.envergadura}`)
    }

    // 

    decolar() {
        console.log("-_-_-_-_- Decolando -_-_-_-_-")
    }

    aterrizar() {
        console.log("-_-_-_-_- Aterrizado com sucesso! -_-_-_-_-")
    }

}

//********* Fabrica **********//
const Carro1 = new Carro("Ferrari",1980,"vermelho")
Carro1.criarCarro()
Carro1.ligar()
Carro1.acelerar()

const Carro2 = new Carro("Fusca",1950,"azul")
Carro2.criarCarro()
Carro2.ligar()
Carro2.desligar()

const Aviao1 = new Aviao("35,80 m","Boeing-737",1980)
Aviao1.criaraviao()
Aviao1.decolar()
Aviao1.aterrizar()

const Aviao2 = new Aviao("80 m","Windrunner",2024)
Aviao2.criaraviao()
Aviao2.decolar()