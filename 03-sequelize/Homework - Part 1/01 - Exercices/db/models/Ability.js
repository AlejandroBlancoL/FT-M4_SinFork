const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Ability', {
      'name': {type: DataTypes.STRING},
      'description': {type: DataTypes.TEXT},
      'mana_cost': {type: DataTypes.FLOAT, validate: {isFloat: true, min: 10.0, max: 250.0}}
   },
   {
      indexes: [
         {
            unique: true,
            fields: ['name', 'mana_cost'],
            name: 'compositeIndex'
         }
      ]
   });
};
