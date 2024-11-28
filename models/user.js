"use strict";
const { Model, UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            User.hasMany(models.Post, {
                foreignKey: "id",
                targetKey: "userId",
                as: "Posts"
            }),
                User.hasMany(models.Follow, {
                    foreignKey: "id",
                    targetKey: "followerId",
                    as: "Following"
                }),
                User.hasMany(models.Follow, {
                    foreignKey: "id",
                    targetKey: "followingId",
                    as: "Followers"
                })
        }
    }
    User.init(
        {
            id: {
                allowNull: false,
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: UUIDV4,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
            },
            mobile: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
            },
            type: {
                type: DataTypes.STRING,
                defaultValue: "USER",
            },
            privacy: {
                type: DataTypes.BOOLEAN,
                defaultValue: false,
            },
            imagePath: {
                type: DataTypes.STRING,
            }
        },
        {
            sequelize,
            modelName: "User",
            tableName: "users",
            timestamps: true,
            paranoid: true,
        },
    );
    return User;
};
