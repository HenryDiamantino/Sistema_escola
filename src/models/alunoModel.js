import conexao from "../config/db.js";

export async function criarAluno(nome, cpf, email, telefone, data_nascimento, turma_id, status) {
    try {
        const [rows] = await conexao.query(
            `INSERT INTO alunos (nome, cpf, email, telefone, data_nascimento, turma_id, status) VALUES (?, ?, ?, ?, ?, ?, ?)`, [nome, cpf, email, telefone, data_nascimento, turma_id, status || "ativo"]
        );
        return rows.insertId;
    } catch (error) {
        throw error;
    }
}


export async function listarAluno(id) {
    try {
        const [rows] = await conexao.query(
            "SELECT id, nome, cpf, email, telefone, data_nascimento, turma_id FROM alunos ORDER BY id DESC"
        );
        return rows;
    } catch (error) {
        res.status(500).json({ msg: "Erro ao listar os alunos", error: error.message });
    }
}


export const buscarPorEmail = async (email) => {
    let conn;
    try {
        conn = await conexao.getConnection();
        const [rows] = await conn.query(`SELECT * FROM alunos WHERE email = ?`, [email]);
        return rows[0]; // Retorna o aluno ou undefined
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
};