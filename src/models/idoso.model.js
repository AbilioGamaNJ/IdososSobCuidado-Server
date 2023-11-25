module.exports = (sequelize, Sequelize) => {
    const idoso = sequelize.define('idoso',  {
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_idoso:{
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/
        },
        email_idoso: {
            type: Sequelize.STRING,
            notNull: true,
            is:/^[a-zA-Z0-9\._]{4, 32}$/,
            unique:true
        },
        celular_idoso:{
            type: Sequelize.STRING,
            notNull: true,
            is:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            unique:true
        },
         cpf_idoso: {
        type: Sequelize.STRING,
        notNull: true,
        is:/^[a-zA-Z0-9\._]{4, 32}$/,
        unique:true
        },
        senha_idoso:{
            type: Sequelize.STRING,
            notNull: true,
        }
    },
    {
        timestamps: false,
    }   

)
    return idoso
}