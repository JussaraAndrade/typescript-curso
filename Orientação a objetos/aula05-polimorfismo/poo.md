## Orientação a Objetos

<strong>4 pilares da orientação objeto:</strong>

1 - Abstração, Encapsulamento, Herança e Polimorfismo.


`Abstração`; transforma o problema do mundo real mais próximo possível para analise de desenvolvimento para programação.

* Entidades; produtos, cliente, etc.

* Identidade; classes

* Atributos; caracteristicas (nome, quantidade de estoque, etc.)

* Métodos/ações; baixa de estoque, adquirir novo estoque. 

### Sobre Programação Orientando a Objetos

- Vai trazer diversas facilidades
- Representação do mundo real para dentro do projeto
- Auxilia na análise orientada a objetos
- Organização, reutilização todos os itens vinculados aos pilares da orientação ao objeto.

### Vantagem

- Prática de programação
- Segurança
- Reutilização de código
- Fácil manutenção

## Estrutura

- Classe

Exemplo 1:
```typescript
    // classe; objetos do mundo real, são implementados e são desenvolvidos nas chamadas classes
    // O nome da classe; mamiferos
    Class Mamifero {
        // atributos; são características
        data_nascimento: date,
        peso: float,
        energia: float

        // métodos; são ações/comportamentos
        comer(){}
        mover(){}
        mamar(){}
    }
```
Exemplo 2:
```typescript
    // classe
    class Empresa {
        // atributos
        nome: string,
        cnjp: string,
        // Tem diversos funcionários
        funcionarios[]: string,

        // métodos
        contratar(){}
        demitir(){}
    }

    class Funcionario {
        nome: string,
        cpf: string,
        salario: float

        trabalhar(){}
        fofocar(){}
        baterPonto(){}
    }
```

Classe e Objeto:

```typescript
    /*
    - Classe é o que projetamos
    - Objeto é o que criamos a partir da classe
    - As classes estão para os objetos assim como as plantas arquitetônicas estão para as casas
    */

   //Monta uma classe a partir da classe construo N objetos, ou seja, crio vários veículos
   class Carro {
       marca: string,
       modelo: string,
       ano: date,
       potencia: string

       acelerar(){}
       trocarMarcha(){}
   }

   // Objetos
   Carro carro = new Carro("Fiat", "Bravo", 2014, '100cv')

   Carro carro = new Carro("Ford", "Maverick", 2014, '199cv')

   Carro carro = new Carro("Chervrolet", "Camaro", 2014, '406cv')

```

## Typescript

- Tem grande suporte para orientação a objeto
- Criado em 2012 pela Microsoft
- Características irá conseguir desenvolver códigos mais adequados, elegante e estilizados com typescript
- Quando executado ele é transpilado/convertido para Javascript

### Vantagem

- Intellisense; no typescript tem autocomplete, no javascript não tem.

### Recursos mais modernos do JS

- Typescript é JavaScript ele depende do Javascript, então ele roda em cima do Javascript

### Feedback em tempo de compilação

- Em tempo de modificação, em tempo de compilação.

### Produtividade

- a curto prazo 
- defini tipagem



