//const { PASSWORD } = require('../config/db.config')
const db = require('../models')
const Idoso = db.idoso

exports.findAll = async () => {
 try{
    const idoso = await Idoso.findAll({
        attributes:['nome_idoso','email_idoso', 'celular_idoso', 'cpf_idoso', 'senha_idoso']
    })
    return idoso
 } catch (e) {
    throw Error('Ocorreu um erro ao selecionar os usuários. ERROR: ' + e.message)
 }
}

exports.findById = async(id) => {
    try{
        const idoso = await Idoso.findByPk(id, {
            attributes:['nome_idoso','email_idoso', 'celular_idoso', 'cpf_idoso', 'senha_idoso']
        })
        return idoso
    } catch (e){
        throw Error('Ocorreu um erro ao selecionar o usuario. ERROR: ' + e.message)
    }
}
exports.create = async(nome_idoso, email_idoso, celular_idoso, cpf_idoso, senha_idoso) => {
    try{
        const idoso = await Idoso.create({
            nome_idoso: nome_idoso, celular_idoso: celular_idoso, cpf_idoso: cpf_idoso, senha_idoso: senha_idoso, email_idoso: email_idoso})
        return idoso
    }catch (e){
        throw Error('Erro ao criar post:  ' + ' ERROR:  ' + e.message)
    }
}
exports.update = async (nome_idoso, email_idoso, celular_idoso, cpf_idoso, senha_idoso) => {
    try{
        await Idoso.update(
            {nome_idoso: nome_idoso, email_idoso: email_idoso, celular_idoso: celular_idoso, cpf_idoso: cpf_idoso, senha_idoso: senha_idoso},
            {where:{id: id}})
    } catch (e){
        throw Error('Erro ao selecionar o usuario: ' + nome_idoso + ' ERROR: ' + e.message)
    }
}
exports.delete = async (id) => {
    try {
        await Idoso.destroy({
            where:{id: id}
        })
    } catch (e){
        throw Error('Ocorreu um erro ao deletar o usuario. ERROR: ' + e.message)
    }
}
exports.login = async (email_idoso, senha_idoso) => {
    try{
        const idoso = await Idoso.findOne(
            {where:{email_idoso: email_idoso, senha_idoso: senha_idoso}}
          
        )
        return idoso
    } catch (e){
        throw Error('login Error ' + e.message)
    }
    

}