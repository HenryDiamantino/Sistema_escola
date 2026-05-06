import * as alunoModel from "../models/alunoModel.js";
import bcrypt from "bcryptjs";

export async function listar(req, res) {
    const alunos = await alunoModel.listarAluno();

    res.json(alunos);
}

export async function buscarPorEmail(req, res) {
    const alunos = await alunoModel.buscarPorEmail(req.params.body);

    if (!alunos) {
        return res.status(404).json({ msg: "Usuário não encontrado" })
    }

    res.json(alunos);
}

export async function criar(req, res) {
    const {nome, cpf, email, telefone, data_nascimento, turma_id} = req.body;

    if (!nome || !cpf || !email || !telefone || !data_nascimento || !turma_id) {
        return res.status(400).json({msg:"Nome, cpf, email, telefone, data de nascimento e o id da turma são obrigatórios!"});
    }

    const id = await alunoModel.criarAluno(nome, cpf, email, telefone, data_nascimento, turma_id);

    return res.status(201).json({msg: "Usuário criado com sucesso", id})
}