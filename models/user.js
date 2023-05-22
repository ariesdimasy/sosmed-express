'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    email: { 
      type:DataTypes.STRING, 
      validate: { 
        isEmail:true
      }
    } ,
    password: { 
      type:DataTypes.STRING,
    },
    phoneNumber: { 
      type:DataTypes.STRING,
      validate:{
        isNumeric:true
      }
    },
    suspendCounter:{
      type:DataTypes.INTEGER,

    }
  }, {});
  user.associate = function(models) {
    user.hasMany(models.tweet,{
      foreignKey:"userId"
    })
  };
  return user;
};