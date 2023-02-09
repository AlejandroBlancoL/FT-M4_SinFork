const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      'code': {type: DataTypes.STRING, length: 5, primaryKey: true, unique: true},
      'name': {type: DataTypes.STRING, unique: true, allowNull: false},
      'age': {type: DataTypes.INTEGER, allowNull: false},
            'race': {type: DataTypes.ENUM, 
         values: ['Human', 'Elf', 'Machine', 'Demon', 'Animal', 'Other'],
         defaultValues: 'Other', allowNull:false
      },
      'hp': {type: DataTypes.FLOAT, allowNull: false},
      'mana': {type: DataTypes.FLOAT, allowNull: false},
   }, {timestamps: false});
};
