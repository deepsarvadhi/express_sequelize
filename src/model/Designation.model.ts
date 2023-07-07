import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/conection';

class Designation extends Model { }

Designation.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        Name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }
    },
    {
        sequelize,
        modelName: 'Designation',
    });


Designation.sync();


export default Designation;
