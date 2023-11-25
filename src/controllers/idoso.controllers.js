const { request } = require('express')
const { idoso } = require('../models')
const idosoService = require('../services/idoso.service')

exports.findAll = async (request, response) =>{
    try{
        const idoso = await idosoService.findAll()
            return response.status(200).json({
                status: 200,
                data: idoso,
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
        const idoso = await idosoService.findById(id)
        response.status(200).json({
            status: 200,
            data: idoso,
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
        const { nome_idoso, email_idoso, celular_idoso, senha_idoso, cpf_idoso} = request.body
        const idoso = await idosoService.create(nome_idoso, email_idoso, celular_idoso, senha_idoso, cpf_idoso)
        response.status(201).send({
            message: "Usuario cadastrado com sucesso!",
            body:{
                idoso: idoso
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
        const {nome_idoso, email_idoso, celular_idoso, senha_idoso, cpf_idoso} = request.body
        await idosoService.update(id, nome_idoso, email_idoso, celular_idoso, senha_idoso, cpf_idoso)
        response.status(200).send({
            message: "usuario alterado com sucesso",
            body:{
                status: 200,
               nome_idoso: nome_idoso,
                email_idoso: email_idoso,
                celular_idoso: celular_idoso,
                senha_idoso: senha_idoso,
                cpf_idoso: cpf_idoso 
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
        await idosoService.delete(id)
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
   
    const {email_idoso, senha_idoso } = request.body
    const idoso = await idosoService.login(email_idoso, senha_idoso)
    if(idoso == null){
        response.status(400).send("Usuário não encontrado");
    }else{
        response.status(200).json({
            message: "Login efetuado!",
            status: 200,
            data: idoso
        })
    }
} catch (e){
    return response.status(400).send({
        status: 400,
        message: "Erro ao efetuar o login. Error: " + e.message

    })
}
}