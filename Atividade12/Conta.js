class Conta{
    #nome;
    #banco;
    #numero;
    #saldo;
    setNome(value){
        this.nome = value;
    }
    setBanco(value){
        this.banco = value;
    }
    setNumero(value){
        this.numero = value;
    }
    setSaldo(value){
        this.saldo = value;
    }
    
    getNome(){
        return this.nome;
    }
    getBanco(){
        return this.banco;
    }
    getNumero(){
        return this.numero;
    }
    getSaldo(){
        return this.saldo;
    }
}

class ContaCorrente extends Conta{
    #saldoEspecial
    setSaldoEspecial(value){
        this.saldoEspecial = value;
    }
    getSaldoEspecial(){
        return this.saldoEspecial;
    }
}

class ContaPoupanca extends Conta{
    #juros;
    #dataVencimento;
    setJuros(value){
        this.juros = value;
    }
    setDataVencimento(value){
        this.dataVencimento = value; 
    }
    getJuros(){
        return this.juros;
    }
    getDataVencimento(){
        return this.dataVencimento;
    }
}

function montarContaCorrente(){
    let nome = document.getElementById("cNome").value;
    let banco = document.getElementById("cBanco").value;
    let numero = document.getElementById("cNumero").value;
    let saldo = document.getElementById("cSaldo").value;
    let saldoEspecial = document.getElementById("cSaldoEspecial").value;

    var contaC = new ContaCorrente();
    contaC.setNome(nome);
    contaC.setBanco(banco);
    contaC.setNumero(numero);
    contaC.setSaldo(saldo);
    contaC.setSaldoEspecial(saldoEspecial);

    alert("Nome correntista: " + contaC.getNome() + 
        "\nBanco: " + contaC.getBanco() +
        "\nNumero: " + contaC.getNumero() + 
        "\nSaldo: " + contaC.getSaldo() + 
        "\nSaldo Especial: " + contaC.getSaldoEspecial()
    );
}

function montarContaPoupanca(){
    let nome = document.getElementById("pNome").value;
    let banco = document.getElementById("pBanco").value;
    let numero = document.getElementById("pNumero").value;
    let saldo = document.getElementById("pSaldo").value;
    let juros = document.getElementById("pJuros").value;
    let dataVencimento = document.getElementById("pDataVencimento").value;

    var contaP = new ContaPoupanca();
    contaP.setNome(nome);
    contaP.setBanco(banco);
    contaP.setNumero(numero);
    contaP.setSaldo(saldo);
    contaP.setJuros(juros);
    contaP.setDataVencimento(dataVencimento);

    alert("Nome correntista: " + contaP.getNome() + 
        "\nBanco: " + contaP.getBanco() + 
        "\nNumero: " + contaP.getNumero() + 
        "\nSaldo: " + contaP.getSaldo() + 
        "\nJuros: " + contaP.getJuros() +
        "\nData de vencimento: " + contaP.getDataVencimento()
    );
}