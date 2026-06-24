# Teste Mobile EBAC Shop - WebdriverIO e Appium

![WebdriverIO](https://img.shields.io/badge/WebdriverIO-mobile%20automation-EA5906?style=for-the-badge&logo=webdriverio&logoColor=white)
![Appium](https://img.shields.io/badge/Appium-Android%20testing-472BDE?style=for-the-badge&logo=appium&logoColor=white)
![Mocha](https://img.shields.io/badge/Mocha-runner-8D6748?style=for-the-badge&logo=mocha&logoColor=white)
![QA](https://img.shields.io/badge/QA-mobile%20E2E-0A66C2?style=for-the-badge)

Projeto de automação mobile para a EBAC Shop usando WebdriverIO, Appium e Mocha, com foco no fluxo de cadastro de usuário em ambiente Android.

## O que este projeto demonstra

| Competência | Evidência no projeto |
| --- | --- |
| Mobile automation | WebdriverIO integrado ao Appium |
| Android testing | Uso de seletores UiAutomator2 e XPath |
| Fluxo E2E mobile | Navegação até perfil, cadastro e criação de usuário |
| Massa dinâmica | Telefone e e-mail gerados durante a execução |
| Page Objects | Estrutura com `test/pageobjects` para evolução da suíte |

## Estrutura

```text
.
├── test/
│   ├── pageobjects/
│   └── specs/
│       └── cadastro.e2e.js
├── package.json
└── wdio.conf.cjs
```

## Como executar

```bash
git clone https://github.com/DouglasAntoni0/teste-mobile-ebac-shop.git
cd teste-mobile-ebac-shop
npm install
npm run wdio
```

> Observação: a execução mobile depende de ambiente Appium configurado, dispositivo/emulador compatível e aplicativo alvo acessível ao runner.

## Resultado técnico

Este repositório evidencia prática real de automação mobile: lidar com seletores, sincronização, teclado, dados dinâmicos e estrutura de specs. É uma base importante para discutir qualidade em aplicativos, testabilidade e manutenção de suítes mobile.
