'use strict';
const { DataTypes } = require("sequelize")
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("postImages",{
     id: {
       allowNull: false,
       type: DataTypes.UUID,
       primaryKey: true,
       defaultValue: Sequelize.UUIDV4,
     },
     postId: {
       allowNull: false,
       type: DataTypes.UUID,
     },
     postImagePath: {
       type: DataTypes.STRING,
     },
     createdAt: {
       allowNull: false,
       type: DataTypes.DATE,
       defaultValue: DataTypes.NOW,
     },
     updatedAt: {
       allowNull: false,
       type: DataTypes.DATE,
       defaultValue: DataTypes.NOW,
     },
     deletedAt: {
       allowNull: true,
       type: DataTypes.DATE,
     }
   })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("postImages")
  }
};
