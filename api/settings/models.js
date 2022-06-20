const { DataTypes } = require('sequelize');
const connection = require('./database').connection;

const User = connection.define('User', {

    id:{
        type: DataTypes.SMALLINT.UNSIGNED,
        utoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    status:{
        type: DataTypes.STRING(100)
    },
    last_log_date:{
        type:DataTypes.DATE,
    },
    last_log_time:{
        type: DataTypes.TIME,
    },
    reg_time_date: {
        type: DataTypes.DATE,
    },
    reg_time:{
        type: DataTypes.TIME,
    },
    account_type:{
        type: DataTypes.STRING(100)
    }

}, {
    tableName: 'user'
});

let create = async ()=>{
    await User.sync().then(r=>{
        console.log(r);
    })
}
create().then(r=>console.log(r));