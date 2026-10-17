# Cadastro Android da EBAC Shop — WebdriverIO e Sauce Labs

Exercício de automação do cadastro de usuário com WebdriverIO, Mocha, Appium e UiAutomator2. A configuração atual executa no Sauce Labs, na região `us-west-1`.

## Escopo atual

O spec `test/specs/cadastro.e2e.js` abre Profile, acessa Sign up, preenche os dados, oculta o teclado e toca em Create. E-mail e telefone são gerados durante a execução. O cenário ainda não possui uma asserção final de cadastro confirmado; o término do script demonstra a execução das interações, não a aprovação da regra de negócio.

`test/pageobjects/` mantém a estrutura inicial de Page Objects. O fluxo atual está no spec.

## Preparar o ambiente remoto

Requisitos: Node.js 22, npm, conta Sauce Labs com execução Android disponível e o APK da EBAC Shop. O APK não acompanha este repositório.

1. Faça upload do APK no App Storage da região `us-west-1`.
2. Use `universal.apk` como nome no storage, ou informe sua referência em `SAUCE_APP`.
3. Obtenha o usuário e a access key da sua própria conta.
4. Confirme que a seleção de dispositivo nas capabilities é compatível com o plano e com o app.

```bash
git clone https://github.com/DouglasAntoni0/teste-mobile-ebac-shop.git
cd teste-mobile-ebac-shop
npm ci
```

PowerShell:

```powershell
$env:SAUCE_USERNAME = "seu-usuario"
$env:SAUCE_ACCESS_KEY = "sua-chave"
$env:SAUCE_APP = "storage:filename=universal.apk"
npm run wdio
```

Bash:

```bash
export SAUCE_USERNAME="seu-usuario"
export SAUCE_ACCESS_KEY="sua-chave"
export SAUCE_APP="storage:filename=universal.apk"
npm run wdio
```

`SAUCE_APP` é opcional; seu padrão é `storage:filename=universal.apk`. As credenciais são obrigatórias e lidas do ambiente do processo. Um arquivo `.env` não é carregado automaticamente.

O script `wdio` executa o arquivo existente `wdio.conf.cjs`. O comando equivalente é:

```bash
npx wdio run ./wdio.conf.cjs
```

## Credenciais e evidências

Não mantenha access keys no código ou em commits. A configuração atual não contém valores de conta embutidos. Chaves anteriormente publicadas devem ser substituídas no Sauce Labs; elas continuam no histórico do Git.

Consulte logs, vídeo e sessão no Sauce Labs. Este repositório ainda não tem workflow de CI nem coleta local de relatório HTML. A execução local com Appium exige outra configuração de conexão e um APK local; o arquivo atual é direcionado ao serviço remoto.

## Próximos ajustes

- Adicionar asserção explícita do resultado do cadastro.
- Reduzir pausas fixas e melhorar a sincronização por estado.
- Consolidar os Page Objects usados pelo fluxo.
- Parametrizar a seleção de dispositivo e ampliar cenários negativos.
