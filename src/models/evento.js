/* eslint-disable class-methods-use-this */
/* eslint-disable camelcase */
import db from '../db/dbconfig.js';

class Evento {
  constructor({
    id,
    nome,
    descricao,
    data,
    autor_id,
    created_at,
    updated_at,
  }) {
    this.id = id || null;
    this.nome = nome;
    this.descricao = descricao;
    this.data = data;
    this.autor_id = autor_id;
    this.created_at = created_at || new Date().toISOString();
    this.updated_at = updated_at || new Date().toISOString();
  }

  static async getEventos() {
    return db.select('*').from('eventos');
  }
}

export default Evento;
