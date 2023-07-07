import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/conection';

class Employee extends Model {}

Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate  : {
        isEmail : true,
      }
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
      unique: true,
      validate : {
        len : [0,10]
      }
    },
  },
  {
    sequelize,
    modelName: 'Employee',
  }
);

  Employee.sync();

export default Employee;
