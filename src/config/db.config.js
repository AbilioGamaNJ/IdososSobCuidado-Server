module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "senhasql123",
    DB: "idosoSobcuidado_server_localhost",
    DIALECT : "postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
