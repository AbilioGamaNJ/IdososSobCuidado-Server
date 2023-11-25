const { request } = require('express')
const { cuidador } = require('../models')
const cuidadorService = require('../services/cuidador.service')

exports.findAll = async (request, response) =>{
    try{
        const cuidador = await cuidadorService.findAll()
            return response.status(200).json({
                status: 200,
                data: cuidador,
                message: 'Usuarios listados com sucesso'
            })
    }catch (e){
        response.send(400).json({
            status:400,
            message: e
        })
    }
}
exports.findById = async (request, response) => {
    try{
        const id = parseInt(request.params.id)
        const cuidador = await cuidadorService.findById(id)
        response.status(200).json({
            status: 200,
            data: cuidador,
            message: 'Usuario selecionado com sucesso'
        })
    } catch (e){
        response.send(400).json({
            status: 400,
            message: e
        })
    }
}
exports.create = async (request, response) => {
    try{
        const { nome_cuidador, email_cuidador, celular_cuidador, senha_cuidador, cpf_cuidador} = request.body
        const cuidador = await cuidadorService.create(nome_cuidador, email_cuidador, celular_cuidador, senha_cuidador, cpf_cuidador)
        response.status(201).send({
            message: "Usuario cadastrado com sucesso!",
            body:{
                cuidador: cuidador
            }
        })
    }catch (e) {
        return response.status(400).json({
            status: 400,
            message: "Erro ao cadastrar o usuario. Error: " + e.message
        })
    }
}
exports.update = async(request, response) =>{
    try{
        const id = parseInt(request.params.id)
        const {nome_cuidador, email_cuidador, celular_cuidador, senha_cuidador, cpf_cuidador} = request.body
        await cuidadorService.update(id, nome_cuidador, email_cuidador, celular_cuidador, senha_cuidador, cpf_cuidador)
        response.status(200).send({
            message: "usuario alterado com sucesso",
            body:{
                status: 200,
               nome_cuidador: nome_cuidador,
                email_cuidador: email_cuidador,
                celular_cuidador: celular_cuidador,
                senha_cuidador: senha_cuidador,
                cpf_cuidador: cpf_cuidador 
            }
    })
    } catch (e) {
        return response.status(400).json({
            status: 400,
            message: e.message
        })
    }
}
exports.delete = async(request, response) => {
    try{
        const id = parseInt(request.params.id)
        if (id == 0) throw Error('ID não informado')
        await cuidadorService.delete(id)
        response.status(200).send({
            status: 200,
            message: "Usuario deletado!"
        })
    } catch(e){
            return response.status(400).json({
                status: 400,
                message: e.message
            })
    }
}
exports.login = async(request, response) => {
try{
   
    const {email_cuidador, senha_cuidador } = request.body
    const cuidador = await cuidadorService.login(email_cuidador, senha_cuidador)
    if(idoso == null){
        response.status(400).send("Usuário não encontrado");
    }else{
        response.status(200).json({
            message: "Login efetuado!",
            status: 200,
            data: cuidador
        })
    }
} catch (e){
    return response.status(400).send({
        status: 400,
        message: "Erro ao efetuar o login. Error: " + e.message

    })
}
}