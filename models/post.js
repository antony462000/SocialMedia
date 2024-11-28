"use strict";
const { Model, UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Post extends Model {
        static associate(models) {
            Post.belongsTo(models.User, {
                foreignKey: "userId",
                targetKey: "id",
                as: "User"
            }
            ),
                Post.hasMany(models.PostImage, {
                    foreignKey: "id",
                    targetKey: "postId",
                    as: "PostImages"
                })
        }
    }
    Post.init(
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
            caption: {
                type: DataTypes.STRING,
            },
            likes: {
                type: DataTypes.DOUBLE,
                defaultValue: 0
            },
        },
        {
            sequelize,
            modelName: "Post",
            tableName: "posts",
            timestamps: true,
            paranoid: true,
        },
    );
    return Post;
};
