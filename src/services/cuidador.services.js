const { where } = require('sequelize')
const db = require('../models')
const Cuidador = db.cuidador

exports.findAll = async () => {
 try{
    const cuidador = await Cuidador.findAll({
        attributes:['nome_cuidador','email_cuidador', 'celular_cuidador', 'cpf_cuidador', 'senha_cuidador']
    })
    return cuidador
 } catch (e) {
    throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
   
 }
}

 exports.findById = async(id) => {
    try{
         const cuidador = await Cuidador.findByPk(id, {
            attributes:['nome_cuidador','email_cuidador', 'celular_cuidador', 'cpf_cuidador', 'senha_cuidador']        })
        return cuidador
    } catch (e){
        throw Error('Ocorreu um erro ao selecionar o Post. ERROR: ' + e.message)
    }
 }
exports.create = async(nome_cuidador, email_cuidador, celular_cuidador, cpf_cuidador, senha_cuidador) => {
    try{
        const cuidador = await Cuidador.create({
            nome_cuidador: nome_cuidador, celular_cuidador: celular_cuidador, cpf_cuidador: cpf_cuidador, senha_cuidador: senha_cuidador, email_cuidador: email_cuidador})
        return cuidador
    }catch (e){
        throw Error('Erro ao criar post:  ' + ' ERROR:  ' + e.message)
    }
}
exports.delete = async (id) => {
    try {
        await Cuidador.destroy({
            where:{id: id}
        })
    } catch (e){
        throw Error('Ocorreu um erro ao deletar Post. ERROR: ' + e.message)
    }
}
exports.update = async (nome_cuidador, email_cuidador, celular_cuidador, cpf_cuidador, senha_cuidador) => {
    try{
        await Cuidador.update(
            {nome_cuidador: nome_cuidador, email_cuidador: email_cuidador, celular_cuidador: celular_cuidador, cpf_cuidador: cpf_cuidador, senha_cuidador: senha_cuidador},
            {where:{id: id}})
    } catch (e){
        throw Error('Erro ao selecionar o usuario: ' + nome_cuidador + ' ERROR: ' + e.message)
    }
}
exports.login = async (email_cuidador, senha_cuidador) => {
    try{
        const cuidador = await Cuidador.findOne(
            {where:{email_cuidador: email_cuidador, senha_cuidador: senha_cuidador}}
          
        )
        return cuidador
    } catch (e){
        throw Error('login Error ' + e.message)
    }
    

}