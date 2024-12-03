# 🚀 Desafio de Código: Ganho de Capital

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-16.18.0-green)](https://nodejs.org/)

## 📝 Descrição do desafio

O objetivo deste exercício é implementar um programa de linha de comando (CLI) que calcula o imposto a ser pago sobre lucros ou prejuízos de operações no mercado financeiro de ações. 

---

## 📋 Tabelas de Conteúdo

- [🛠️ Instalação](#️instalação)
- [⚙️ Como Funciona](#️como-funciona)
- [📈 Exemplo de Entrada e Saída](#exemplo-de-entrada-e-saída)
- [📜 Regras de Negócio](#regras-de-negócio)
- [▶️ Como Rodar](#como-rodar)
- [🤝 Contribuindo](#contribuindo)
- [📄 Licença](#licença)

---

## 🛠️ Instalação

1. Certifique-se de que o **Node.js** está instalado em sua máquina.  
   O programa foi desenvolvido e testado na versão **16.18.0**.  
   Para verificar a versão instalada, use:

   ```bash
   node --version
`
2. Clone este repositório
   git clone https://github.com/seu-usuario/seu-repositorio.git

3. Acesse a pasta do projeto:

  cd seu-repositorio

4. Instale as dependências:

   npm install

⚙️ Como Funciona?

Digite toda a sequência de operações JSON.
Ao terminar, digite a palavra end e pressione Enter para processar os dados.
Para colar a sequência de JSON, use Ctrl + Shift + V no terminal.

📈 Exemplo de Entrada e Saída
🟢 Entrada:
json
[
  {"operation": "buy", "unit-cost": 10.00, "quantity": 10000},
  {"operation": "sell", "unit-cost": 20.00, "quantity": 5000}
]
end
🔵 Saída:
json
[
  {"tax": 0.00},
  {"tax": 10000.00}
]

📜 Regras de Negócio
Lucro: Imposto de 20% será cobrado sobre o lucro calculado.
Prejuízo: Pode ser usado para deduzir lucros futuros.
Isenção: Se o valor total da operação de venda for menor ou igual a R$ 20.000,00, o imposto não será pago.

▶️ Como Rodar

Execute o programa:

bash
Copiar código
node index.js
Insira os dados JSON e, ao final, digite end e pressione Enter.

🤝 Contribuindo
Contribuições são bem-vindas! Siga estas etapas:

Faça um fork do repositório.
Crie uma branch para sua feature (git checkout -b feature/nova-feature).
Faça o commit das alterações (git commit -m 'Adicionando nova feature').
Envie para o repositório remoto (git push origin feature/nova-feature).
Abra um pull request.

📄 Licença
Este projeto está licenciado sob a MIT License.

