"use strict";
const { Model, UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Follow extends Model {
        static associate(models) {
            Follow.belongsTo(models.User, {
                foreignKey: "followerId",
                targetKey: "id",
                as: "Followers"
            }
            ),
                Follow.belongsTo(models.User, {
                    foreignKey: "followingId",
                    targetKey: "id",
                    as: "Following"
                })
        }
    }
    Follow.init(
        {
            id: {
                allowNull: false,
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: UUIDV4,
            },
            followerId: {
                allowNull: false,
                type: DataTypes.UUID,
            },
            followingId: {
                allowNull: false,
                type: DataTypes.UUID,
            },
            status: {
                type: DataTypes.STRING,
                defaultValue: "PENDING"
            },
        },
        {
            sequelize,
            modelName: "Follow",
            tableName: "follows",
            timestamps: true,
            paranoid: true,
        },
    );
    return Follow;
};
