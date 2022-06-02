/// <reference types="cypress" />

                        //Descrição
describe('Automation Pratic', () =>{

                        //Acessa o index
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    })

                        //Encontra a página de cadastro de cria um novo
                        //Cadastro não concluído a tempo, mas segue o que consegui fazer:

    it.only('Cadastro', () =>{

        cy.get('.login').click();
        cy.get('#email_create').type("pdrodrigo23@gmail.com");
        cy.get('#SubmitCreate > span').click();
        cy.get('#noSlide').should('be.visible');
        cy.get('[type="radio"]').check("1");
        cy.get('#customer_firstname').type("Rodrigo");
        cy.get('#customer_lastname').type("Sousa");
        cy.wait(200);
        cy.get('#passwd').type('123456');
        cy.get('#days').select('23');
        cy.get('#months').select('May');
        cy.get('#years').select('1991');
        cy.get('#firstname').type('Rodrigo');
        cy.get('#lastname').type('Sousa');
        cy.get('#company').type('All Easy');
        cy.get('#address1').type('Carolina, USA');
        cy.get('#address2').type('11');
        cy.get('#city').type('Carolina, USA');
        cy.get('#id_country').select('United States');
        cy.get('#phone').type('1130216952');
        cy.get('#phone_mobile').type('11999999999');
        cy.get('#alias').check('My adress');
        cy.get('#submitAccount > span').click();

    })

                        //Encontra a áre de login e autentica um usuário cadastrado
    it('Login', () =>{

                        //Login
    
        cy.get('.login').click();
        cy.get('#email').type("radhapp@hotmail.com");
        cy.get('#passwd').type("123456");

        cy.get('#SubmitLogin > span').click();

                        //Encerra a sessão

        cy.get('.logout').click();

    })

    it('Login Inválido', () =>{

                             //Login inválido
        
        cy.get('.login').click();
        cy.get('#email').type("pdrodrigo23@gmail.com");
        cy.get('#passwd').type("123456");
    
        cy.get('#SubmitLogin > span').click();
        cy.get('#center_column > :nth-child(2)').should('be.visible');
    
    })

    it('Login em branco', () =>{

                            //Login em Branco

        cy.get('.login').click();
        cy.get('#passwd').type("123456");

        cy.get('#SubmitLogin > span').click();
        cy.get('ol > li').should('be.visible');

        })                    

})