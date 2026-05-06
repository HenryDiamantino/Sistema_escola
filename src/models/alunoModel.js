import conexao from "../config/db.js";

export const criarAluno = async (nome, cpf, email, telefone, data_nascimento, turma_id) => {
    let conn;
    try {
        conn = await conexao.getConnection();
        const query = `INSERT INTO alunos (nome, cpf, email, telefone, data_nascimento, turma_id) VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [nome, cpf, email, telefone, data_nascimento, turma_id];

        const [result] = await conn.query(query, values);
        return result;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
}