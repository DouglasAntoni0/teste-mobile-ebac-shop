describe('Fluxo de Cadastro de Usuário na EBAC Shop', () => {

    it('deve permitir o cadastro de um novo usuário com sucesso', async () => {
        
        const seletorPerfil = 'android=new UiSelector().text("Profile")'
        const seletorSignUpButton = 'android=new UiSelector().text("Sign up")'
        const seletorFirstName = '//android.widget.EditText[@resource-id="firstName"]'
        const seletorLastName = '//android.widget.EditText[@resource-id="lastName"]'
        const seletorPhone = '//android.widget.EditText[@resource-id="phone"]'
        const seletorEmail = '//android.widget.EditText[@resource-id="email"]'
        const seletorPassword = '//android.widget.EditText[@resource-id="password"]'
        const seletorRepassword = '//android.widget.EditText[@resource-id="repassword"]'
        const seletorCreateButton = '~Create'
        
        await driver.pause(5000); 
        await $(seletorPerfil).waitForExist({ timeout: 20000 });
        await $(seletorPerfil).click();

        await $(seletorSignUpButton).waitForExist({ timeout: 10000 })
        await $(seletorSignUpButton).click()

        await $(seletorFirstName).waitForExist({ timeout: 10000 })
        await $(seletorFirstName).setValue("Douglas")

        await $(seletorLastName).setValue("Teste")

        const telefoneUnico = `119${Math.floor(Math.random() * 100000000)}`
        await $(seletorPhone).setValue(telefoneUnico)

        const emailUnico = `douglas.teste${Date.now()}@ebac.com.br`
        await $(seletorEmail).setValue(emailUnico)

        await $(seletorPassword).setValue("semsenha")

        await $(seletorRepassword).setValue("semsenha")

        await driver.hideKeyboard();
        await driver.pause(1000);

        await $(seletorCreateButton).click()
        
        console.log("TESTE CONCLUÍDO COM SUCESSO!");
        
        await driver.pause(10000); 
    });
});