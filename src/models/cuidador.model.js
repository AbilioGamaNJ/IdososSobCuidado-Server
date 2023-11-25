module.exports = (sequelize, Sequelize) => {
    const cuidador = sequelize.define('cuidador',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_cuidador:{
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/
        },
        email_cuidador: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/,
            unique:true
        },
        celular_cuidador:{
            type: Sequelize.STRING,
            notNull: true,
            is:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            unique:true
        },
         cpf_cuidador: {
        type: Sequelize.STRING,
        notNull: true,
        is:/^[a-zA-Z0-9\._]{4, 32}$/,
        unique:true
        },
        senha_cuidador:{
            type: Sequelize.STRING,
            notNull: true,
        }
    },
    {
        timestamps: false,
    }   

)
    return cuidador
}