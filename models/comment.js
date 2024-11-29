"use strict";
const { Model, UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {
            Comment.belongsTo(models.User, {
                foreignKey: "userId",
                targetKey: "id",
                as: "User"
            }
            ),
            Comment.belongsTo(models.Post, {
                foreignKey: "postId",
                targetKey: "id",
                as: "Post"
            }
            )
        }
    }
    Comment.init(
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
            comment: {
                type: DataTypes.STRING
            },
            mainCommentId: {
                allowNull: true,
                type: DataTypes.UUID
            },
        },
        {
            sequelize,
            modelName: "Comment",
            tableName: "comments",
            timestamps: true,
            paranoid: true,
        },
    );
    return Comment;
};
