import {
  describe, expect, it,
} from '@jest/globals';
import request from 'supertest'; // Usando supertest para fazer requisições HTTP
import app from '../../app.js'; // app express

describe('Testando o controlador de autor', () => {
  it('Deve retornar um autor e uma lista de livros baseado no id do autor', async () => {
    const response = await request(app)
      .get('/autores/1/livros')
      .expect(200);

    // Testando a estrutura da resposta
    expect(response.body).toHaveProperty('autor');
    expect(response.body.autor).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        nome: expect.any(String),
        nacionalidade: expect.any(String),
        created_at: expect.any(String),
        updated_at: expect.any(String),
      }),
    );

    expect(response.body).toHaveProperty('livros');
    expect(Array.isArray(response.body.livros)).toBe(true);

    response.body.livros.forEach((livro) => {
      expect(livro).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          titulo: expect.any(String),
          paginas: expect.any(Number),
          editora_id: expect.any(Number),
          autor_id: expect.any(Number),
          created_at: expect.any(String),
          updated_at: expect.any(String),
        }),
      );
    });
  });
});
