import conexao from '../config/db.js'; // Ajuste o caminho conforme seu projeto

// Cria um novo usuário
export const criarUsuario = async (nome, email, senhaCriptografada, perfil) => {
    let conn;
    try {
        conn = await conexao.getConnection();
        const query = `INSERT INTO usuarios (nome, email, senha, perfil) VALUES (?, ?, ?, ?)`;
        const values = [nome, email, senhaCriptografada, perfil || "admin"];
        
        const [result] = await conn.query(query, values);
        return result;
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
};


export const buscarPorEmail = async (email) => {
    let conn;
    try {
        conn = await conexao.getConnection();
        const [rows] = await conn.query(`SELECT * FROM usuarios WHERE email = ?`, [email]);
        return rows[0]; // Retorna o usuário ou undefined
    } catch (error) {
        throw error;
    } finally {
        if (conn) conn.release();
    }
};