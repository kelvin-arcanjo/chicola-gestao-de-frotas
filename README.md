# Chicola.M — Sistema de Gestão de Frotas

Sistema full-stack para gestão de candidaturas de condutores e arrendamento de veículos (motorizadas e viaturas), desenvolvido para a Chicola.M Tecnologia & Serviços (Luanda, Angola).

## 🎯 Sobre o Projeto

A Chicola.M arrenda motorizadas e viaturas a condutores parceiros (em colaboração com a Yango). Este sistema digitaliza o processo de candidatura e permite à equipa interna acompanhar candidaturas em tempo real, substituindo processos manuais.

## ✨ Funcionalidades

- **Formulário público de candidatura** — condutores submetem nome, telefone e tipo de veículo pretendido
- **Dashboard administrativo** — lista em tempo real de todas as candidaturas recebidas
- **API REST** — validação de dados, persistência em base de dados relacional
- **Identidade visual da marca** aplicada em todas as interfaces

## 🛠️ Stack Tecnológica

**Backend:** Node.js, Express.js, MySQL (mysql2/promise)
**Frontend:** HTML5, CSS3, JavaScript (Vanilla, Fetch API)
**Ferramentas:** Git, dotenv, cors

## 🗄️ Modelo de Dados

O schema relacional inclui 3 tabelas principais:

- `drivers` — candidatos a condutores
- `vehicles` — frota de motorizadas e viaturas
- `rentals` — arrendamentos ativos, ligando `drivers` a `vehicles` (tabela de junção, com Foreign Keys)

Ver estrutura completa em [`schema.sql`](./schema.sql).

## 📡 Endpoints da API

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/` | Mensagem de boas-vindas |
| GET | `/sobre` | Informação sobre a empresa |
| POST | `/candidaturas` | Submete nova candidatura |
| GET | `/candidaturas` | Lista todas as candidaturas |

## 🚀 Como Correr Localmente

1. Clonar o repositório
```bash
git clone https://github.com/kelvin-arcanjo/chicola-gestao-de-frotas.git
cd chicola-gestao-de-frotas
```

2. Instalar dependências
```bash
npm install
```

3. Criar o ficheiro `.env` com base no `.env.example`, preenchendo as tuas credenciais MySQL

4. Criar a base de dados (correr `schema.sql` no MySQL Workbench ou CLI)

5. Iniciar o servidor
```bash
node server.js
```

6. Abrir `formulario.html` e `dashboard.html` no browser (recomenda-se a extensão Live Server)

## 📌 Próximos Passos

- [ ] Atribuição de veículos a candidatos aprovados (rota `PUT`)
- [ ] Gestão de pagamentos (tabela `rentals`)
- [ ] Autenticação para o dashboard administrativo
- [ ] Deploy em produção

## 👤 Autor

**Kelvin Arcanjo**
Projeto desenvolvido como parte de aprendizagem full-stack (Node.js, Express, MySQL).