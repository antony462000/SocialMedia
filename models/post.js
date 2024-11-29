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
                    foreignKey: "postId",
                    as: "PostImages"
                }),
                Post.hasMany(models.Like, {
                    foreignKey: "id",
                    targetKey: "postId",
                    as: "Likes"
                }),
                Post.hasMany(models.Comment, {
                    foreignKey: "postId",
                    as: "Comments"
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
