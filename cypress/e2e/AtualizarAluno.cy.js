describe('atualizar aluno', () => {
    let nome = "teste";
    let email = "teste@cesar.school";
    let senha = "123";
    let new_name = "Ronaldinho da Silva";
    let new_class = "2-A";
    let new_date = "2024-05-28";
    let new_date_check = "28 de Maio de 2024";



    before(() => {
        cy.visit('/');
        cy.get('#cadastrar-btn').click();
        cy.get('#nome').type(nome);
        cy.get('#email').type(email);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
    })

    beforeEach(() => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        
        cy.visit('/alunos/');

        cy.get('[name="criar_turma"]').click();
        cy.get(':nth-child(4) > .cadastrar_aluno > .container > form > .form-group > #nome-aluno').type('1-A');
        cy.get('[name="criar_turma_confirmar"]').click();

        cy.get('[name="criar_turma"]').click();
        cy.get(':nth-child(4) > .cadastrar_aluno > .container > form > .form-group > #nome-aluno').type('2-A');
        cy.get('[name="criar_turma_confirmar"]').click();

        cy.get('[name="criar_turma"]').click();
        cy.get(':nth-child(4) > .cadastrar_aluno > .container > form > .form-group > #nome-aluno').type('3-A');
        cy.get('[name="criar_turma_confirmar"]').click();


        cy.get('#cadastrar-botao').click();
        cy.get('#nome-aluno').type('123123123');
        // cy.get('#turma-aluno').select('1-A');
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type('2024-04-18');
        cy.get('[name="cadastrar_confirmar"]').click();

        cy.get('#cadastrar-botao').click();
        cy.get('#nome-aluno').type('xico ciência');
        // cy.get('#turma-aluno').select('1-A');
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type('2024-04-26');
        cy.get('[name="cadastrar_confirmar"]').click();

        cy.get('#cadastrar-botao').click();
        cy.get('#nome-aluno').type('tuka maia');
        cy.get('#turma-aluno').select('3-A');
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type('2004-08-04');
        cy.get('[name="cadastrar_confirmar"]').click();
    })
    it('atualizar aluno completo', () => {
        cy.visit('/alunos/');;
        cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text').as('id');

        cy.get('[onclick="editar()"]').click();
        cy.get('tbody > :nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('#turma-aluno').select(new_class);
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('[name="atualizar_confirmar"]').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', new_name);
            cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', new_class);
            cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', new_date_check);
        });
    })
    it('atualizar aluno nome', () => {
        cy.visit('/alunos/');

        cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(1) > :nth-child(3)').invoke('text').as('class_num');
        cy.get('tbody > :nth-child(1) > :nth-child(4)').invoke('text').as('date');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('[name="atualizar_confirmar"]').click();
        
        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', new_name);
        });
        cy.get('@class_num').then((class_num) => {
            cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', class_num);
        });
        cy.get('@date').then((date) => {
            cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', date);
        });
    })
    it('atualizar aluno serie', () => {
        cy.visit('/alunos/');
    
        cy.get('tbody > :nth-child(3) > :nth-child(1)').invoke('text').as('id');
        cy.get(':nth-child(3) > :nth-child(2)').invoke('text').as('name');
        cy.get(':nth-child(3) > :nth-child(4)').invoke('text').as('date');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#turma-aluno').select(new_class);
        cy.get('[name="atualizar_confirmar"]').click();;

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(3) > :nth-child(1)').should('have.text', id);
        });
        cy.get('@name').then((name) => {
            cy.get(':nth-child(3) > :nth-child(2)').should('have.text', name);
        });
        cy.get('@date').then((date) => {
            cy.get(':nth-child(3) > :nth-child(4)').should('have.text', date);
        })
    })
    it('atualizar aluno data', () => {
        cy.visit('/alunos/');
    
        cy.get('tbody > :nth-child(2) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').invoke('text').as('name');
        cy.get('tbody > :nth-child(2) > :nth-child(3)').invoke('text').as('class_num');

        cy.get('[onclick="editar()"]').click();
        cy.get('tbody > :nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('[name="atualizar_confirmar"]').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', new_date_check);
        });

        cy.get('@name').then((name) => {
            cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', name);
        });

        cy.get('@class_num').then((class_num) => {
            cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', class_num);
        });
    })
    it('atualizar aluno nome e serie', () => {
        cy.visit('/alunos/');

        cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(1) > :nth-child(4)').invoke('text').as('date');

        cy.get('[onclick="editar()"]').click();
        cy.get('tbody > :nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('#turma-aluno').select(new_class);
        cy.get('[name="atualizar_confirmar"]').click();
        
        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', new_name);
            cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', new_class);
        });
        cy.get('@date').then((date) => {
            cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', date);
        });       
    })
    it('atualizar aluno nome e data', () => {
        cy.visit('/alunos/');

        cy.get('tbody > :nth-child(2) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(2) > :nth-child(3)').invoke('text').as('class_num');

        cy.get('[onclick="editar()"]').click();
        cy.get('tbody > :nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('[name="atualizar_confirmar"]').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', new_name);
            cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', new_date_check);
        });

        cy.get('@class_num').then((class_num) => {
            cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', class_num);
        });
        

    })
    it('atualizar aluno serie e data', () => {
        cy.visit('/alunos/');

        cy.get('tbody > :nth-child(3) > :nth-child(1)').invoke('text').as('id');
        cy.get(':nth-child(3) > :nth-child(2)').invoke('text').as('name');

        cy.get('[onclick="editar()"]').click();
        cy.get('tbody > :nth-child(3) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#turma-aluno').select(new_class);
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('[name="atualizar_confirmar"]').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(3) > :nth-child(1)').should('have.text', id);
        });
        cy.get('@name').then((name) => {
            cy.get(':nth-child(3) > :nth-child(2)').should('have.text', name);
        });
    })

    it('atualizar aluno nome não pode estar vazio', () => {
        cy.visit('/alunos/');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('.cadastrar_aluno').should('be.visible');

        cy.get('[formnovalidate=""]').click();   
    })

    afterEach(() => {
        cy.visit('/editar_alunos/')
        cy.get(':nth-child(1) > :nth-child(10) > .cadastrar-botao').click();
        cy.get(':nth-child(1) > :nth-child(10) > .cadastrar-botao').click();
        cy.get(':nth-child(1) > :nth-child(10) > .cadastrar-botao').click();

        cy.visit('/alunos/');

        cy.get('[name="apagar_turma"]').click();
        cy.get(':nth-child(5) > .cadastrar_aluno > .container > form > .form-group > #turma-aluno').select('1-A');
        cy.get('[name="apagar_turma_confirmar"]').click();

        cy.get('[name="apagar_turma"]').click();
        cy.get(':nth-child(5) > .cadastrar_aluno > .container > form > .form-group > #turma-aluno').select('2-A');
        cy.get('[name="apagar_turma_confirmar"]').click();

        cy.get('[name="apagar_turma"]').click();
        cy.get(':nth-child(5) > .cadastrar_aluno > .container > form > .form-group > #turma-aluno').select('3-A');
        cy.get('[name="apagar_turma_confirmar"]').click();
    })
    
    after(() => {
        cy.visit('/admin/');
        cy.get('#id_username').type("adm");
        cy.get('#id_password').type("123");
        cy.get('.submit-row > input').click(); 
        cy.get('.model-user > th > a').click();
        cy.get('#searchbar').type(nome);
        cy.get('#changelist-search > div > [type="submit"]').click();
        cy.get('.action-select').click();
        cy.get('select').select('Remover usuários selecionados');
        cy.get('.button').click();
        cy.get('div > [type="submit"]').click();
    })
})
