import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://sarvadhi:Test@123@localhost:5444/demo', {
    dialect: 'postgres',
    logging: false,
})

sequelize
    .authenticate()
    .then(() => {
        console.log("conection successfully");
    })
    .catch((error) => {
        console.log("conection failed", error);
    })

export default sequelize;