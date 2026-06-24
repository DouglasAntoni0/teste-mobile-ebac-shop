# Teste Mobile EBAC Shop - WebdriverIO e Appium

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-mobile%20automation-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-Android%20testing-472BDE?style=for-the-badge&logo=appium&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-runner-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![QA](https://img.shields.io/badge/QA-mobile%20E2E-0A66C2?style=for-the-badge)

Projeto de automação mobile para a EBAC Shop usando WebdriverIO, Appium e Mocha, com foco no fluxo de cadastro de usuário em ambiente Android.

Este repositório demonstra uma camada importante de QA: automação mobile. Testar aplicativos exige lidar com elementos nativos, sincronização, teclado, emuladores/dispositivos, capabilities e diferenças de comportamento em relação ao web.

## Objetivo do projeto

O objetivo é automatizar o fluxo de cadastro de usuário na EBAC Shop mobile, validando a navegação até a área de perfil, abertura do cadastro e preenchimento dos campos principais.

A suíte trabalha:

- WebdriverIO como runner;
- Appium como ponte de automação mobile;
- Mocha como framework de teste;
- seletores UiAutomator2 e XPath;
- massa dinâmica para telefone e e-mail;
- estrutura com specs e page objects.

## Stack utilizada

| Tecnologia | Papel |
| --- | --- |
| WebdriverIO | Runner de automação mobile |
| Appium | Automação de aplicativo Android |
| UiAutomator2 | Engine Android usada pelo Appium |
| Mocha | Estrutura de teste |
| JavaScript | Linguagem da automação |
| Sauce/cloud ou ambiente Appium | Execução remota/local conforme configuração |

## O que este projeto demonstra

| Competência | Evidência no projeto | Valor técnico |
| --- | --- | --- |
| Mobile automation | WebdriverIO integrado ao Appium | Valida comportamento em app mobile |
| Android testing | Seletores UiAutomator2 e XPath | Interação com elementos nativos |
| Fluxo E2E mobile | Navegação até perfil e cadastro | Cobre jornada funcional |
| Massa dinâmica | Telefone e e-mail gerados durante execução | Reduz colisão de dados |
| Page Objects | Estrutura `test/pageobjects` | Base para evolução e manutenção |
| Sincronização | `waitForExist` e pausas controladas | Lida com carregamento mobile |

## Estrutura

```text
.
├── test/
│   ├── pageobjects/
│   │   ├── login.page.js
│   │   ├── page.js
│   │   └── secure.page.js
│   └── specs/
│       └── cadastro.e2e.js
├── package.json
├── package-lock.json
└── wdio.conf.cjs
```

## Fluxo automatizado

O spec principal executa uma jornada de cadastro:

1. Aguarda carregamento inicial.
2. Localiza o item `Profile`.
3. Acessa a tela de perfil.
4. Clica em `Sign up`.
5. Preenche nome e sobrenome.
6. Gera telefone único.
7. Gera e-mail único com timestamp.
8. Preenche senha e confirmação.
9. Esconde teclado.
10. Clica em `Create`.

## Como executar

Clone o repositório:

```bash
git clone https://github.com/DouglasAntoni0/teste-mobile-ebac-shop.git
cd teste-mobile-ebac-shop
```

Instale dependências:

```bash
npm install
```

Execute usando o arquivo de configuração existente:

```bash
npx wdio run ./wdio.conf.cjs
```

> Observação: a execução mobile depende de ambiente Appium/cloud configurado, aplicativo alvo acessível ao runner e credenciais válidas quando o ambiente remoto for utilizado. Credenciais devem ser tratadas como variáveis de ambiente ou secrets, nunca documentadas em texto aberto.

## Estratégia de testes

A estratégia do projeto é validar uma jornada mobile crítica com foco em estabilidade:

- usar espera explícita para elementos relevantes;
- gerar dados únicos para evitar conflitos;
- manter fluxo em um spec claro;
- organizar Page Objects para evolução futura;
- registrar pontos de interação nativos.

## Pontos de atenção em mobile testing

| Ponto | Por que importa |
| --- | --- |
| Seletores estáveis | Apps sem accessibility IDs tornam automação frágil |
| Teclado virtual | Pode cobrir botões e campos |
| Tempo de carregamento | Dispositivos/emuladores variam em performance |
| Ambiente remoto | Requer app publicado/storage e credenciais válidas |
| Dados únicos | Evitam falhas por usuário já existente |

## Troubleshooting

| Problema | Possível causa | Ação sugerida |
| --- | --- | --- |
| Elemento não encontrado | Tela não carregou ou seletor mudou | Aumentar observabilidade e revisar seletor |
| Teclado bloqueia botão | Teclado aberto após preenchimento | Usar `hideKeyboard` quando necessário |
| Runner não inicia | Configuração WDIO/Appium incompleta | Conferir `wdio.conf.cjs` e dependências |
| Falha em cloud | App/credenciais/capabilities inválidos | Validar storage, secrets e capabilities |

## Resultado técnico

Este repositório evidencia prática real de automação mobile: lidar com seletores, sincronização, teclado, dados dinâmicos e estrutura de specs. É uma base importante para discutir qualidade em aplicativos, testabilidade e manutenção de suítes mobile.

## Competências evidenciadas

- WebdriverIO.
- Appium.
- Automação Android.
- Seletores UiAutomator2 e XPath.
- Dados dinâmicos.
- Estrutura com Page Objects.
- Diagnóstico de instabilidade mobile.

## Possíveis evoluções

- Migrar credenciais sensíveis para variáveis de ambiente.
- Fortalecer Page Objects.
- Adicionar asserts finais mais explícitos.
- Criar screenshots em falhas.
- Integrar execução em pipeline.
- Solicitar/usar accessibility IDs estáveis no app.

## Conclusão

Este projeto mostra uma frente relevante do seu perfil: automação mobile. Ele evidencia domínio prático de ferramentas, mas também aponta uma leitura madura sobre testabilidade, estabilidade e preparação de ambiente, pontos essenciais para QA em aplicativos reais.
