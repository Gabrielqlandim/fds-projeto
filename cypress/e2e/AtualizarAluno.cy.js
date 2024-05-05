describe('atualizar aluno', () => {
    let nome = "teste";
    let senha = "123";
    let new_name = "Ronaldinho da Silva";
    let new_class = "2-A";
    let new_date = "2024-05-28";
    let new_date_check = "28 de Maio de 2024";

    it('atualizar aluno completo', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('tbody > :nth-child(2) > :nth-child(1)').invoke('text').as('id');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('#turma-aluno').select(new_class);
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('.btn').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', new_name);
            cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', new_class);
            cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', new_date_check);
        });

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type('xico ciência');
        cy.get('#turma-aluno').select('1-A');
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type('2024-04-26');
        cy.get('.btn').click();

    })
    it('atualizar aluno nome', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(1) > :nth-child(3)').invoke('text').as('class_num');
        cy.get('tbody > :nth-child(1) > :nth-child(4)').invoke('text').as('date');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('.btn').click();
        
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

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type('123123123');
        cy.get('.btn').click();
        
    })
    it('atualizar aluno serie', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('tbody > :nth-child(3) > :nth-child(1)').invoke('text').as('id');
        cy.get(':nth-child(3) > :nth-child(2)').invoke('text').as('name');
        cy.get(':nth-child(3) > :nth-child(4)').invoke('text').as('date');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#turma-aluno').select(new_class);
        cy.get('.btn').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(3) > :nth-child(1)').should('have.text', id);
            cy.get(':nth-child(3) > :nth-child(3)').should('have.text', new_class);
        });
        cy.get('@name').then((name) => {
            cy.get(':nth-child(3) > :nth-child(2)').should('have.text', name);
        });
        cy.get('@date').then((date) => {
            cy.get(':nth-child(3) > :nth-child(4)').should('have.text', date);
        });

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#turma-aluno').select('3-A');
        cy.get('.btn').click();
    })
    it('atualizar aluno data', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('tbody > :nth-child(2) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(2) > :nth-child(2)').invoke('text').as('name');
        cy.get('tbody > :nth-child(2) > :nth-child(3)').invoke('text').as('class_num');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('.btn').click();

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
        

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type('2024-04-26');
        cy.get('.btn').click();

    })
    it('atualizar aluno nome e serie', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('tbody > :nth-child(1) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(1) > :nth-child(4)').invoke('text').as('date');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('#turma-aluno').select(new_class);
        cy.get('.btn').click();
        
        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(1) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(1) > :nth-child(2)').should('have.text', new_name);
            cy.get('tbody > :nth-child(1) > :nth-child(3)').should('have.text', new_class);
        });
        cy.get('@date').then((date) => {
            cy.get('tbody > :nth-child(1) > :nth-child(4)').should('have.text', date);
        });

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type('123123123');
        cy.get('#turma-aluno').select('1-A');
        cy.get('.btn').click();
        
    })
    it('atualizar aluno nome e data', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('tbody > :nth-child(2) > :nth-child(1)').invoke('text').as('id');
        cy.get('tbody > :nth-child(2) > :nth-child(3)').invoke('text').as('class_num');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type(new_name);
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('.btn').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(2) > :nth-child(1)').should('have.text', id);
            cy.get('tbody > :nth-child(2) > :nth-child(2)').should('have.text', new_name);
            cy.get('tbody > :nth-child(2) > :nth-child(4)').should('have.text', new_date_check);
        });

        cy.get('@class_num').then((class_num) => {
            cy.get('tbody > :nth-child(2) > :nth-child(3)').should('have.text', class_num);
        });
        

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(2) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('#nome-aluno').type('xico ciência'); 
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type('2024-04-26');
        cy.get('.btn').click();

    })
    it('atualizar aluno serie e data', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('tbody > :nth-child(3) > :nth-child(1)').invoke('text').as('id');
        cy.get(':nth-child(3) > :nth-child(2)').invoke('text').as('name');

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#turma-aluno').select(new_class);
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type(new_date);
        cy.get('.btn').click();

        cy.get('@id').then((id) => {
            cy.get('tbody > :nth-child(3) > :nth-child(1)').should('have.text', id);
            cy.get(':nth-child(3) > :nth-child(3)').should('have.text', new_class);
            cy.get(':nth-child(3) > :nth-child(4)').should('have.text', new_date_check);
        });
        cy.get('@name').then((name) => {
            cy.get(':nth-child(3) > :nth-child(2)').should('have.text', name);
        });

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(3) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#turma-aluno').select('3-A');
        cy.get('#data-aluno').click();
        cy.get('#data-aluno').type('2004-08-04');
        cy.get('.btn').click();
    })
    it('atualizar aluno nome não pode estar vazio', () => {
        cy.visit('/');
        cy.get('#nome').type(nome);
        cy.get('#senha').type(senha);
        cy.get('#botao').click();
        cy.get('#aalunos').click();

        cy.get('[onclick="editar()"]').click();
        cy.get(':nth-child(1) > :nth-child(7) > .cadastrar-botao').click();
        cy.get('#nome-aluno').clear();
        cy.get('.btn').click();
        cy.get('.cadastrar_aluno').should('be.visible');
        
    })


})
