'use strict';
module.exports = (sequelize, DataTypes) => {
  const tweet = sequelize.define('tweet', {
    tweet: { 
      type:DataTypes.STRING,
      validate:{
        len:[5,150]
      }
    },
    imageUrl: { 
      type:DataTypes.STRING,
      validate: { 
        // isUrl:true
      }
    },
    imageName:{
      type:DataTypes.STRING,
    }, 
    userId: { 
      type:DataTypes.INTEGER
    }
  }, {});
  tweet.associate = function(models) {
    tweet.belongsTo(models.user, { 
      foreign_key: "userId"
    })
  };
  return tweet;
};