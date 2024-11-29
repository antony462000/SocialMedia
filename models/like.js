"use strict";
const { Model, UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Like extends Model {
        static associate(models) {
            Like.belongsTo(models.User, {
                foreignKey: "userId",
                targetKey: "id",
                as: "User"
            }
            ),
            Like.belongsTo(models.Post, {
                foreignKey: "postId",
                targetKey: "id",
                as: "Post"
            }
            )
        }
    }
    Like.init(
        {
            id: {
                allowNull: false,
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: UUIDV4,
            },
            userId: {
                allowNull: false,
                type: DataTypes.UUID,
            },
            postId: {
                allowNull: false,
                type: DataTypes.UUID,
            },
            isLike: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            modelName: "Like",
            tableName: "likes",
            timestamps: true,
            paranoid: true,
        },
    );
    return Like;
};
