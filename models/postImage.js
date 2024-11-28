"use strict";
const { Model, UUIDV4 } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class PostImage extends Model {
        static associate(models) {
            PostImage.belongsTo(models.Post, {
                foreignKey: "postId",
                targetKey: "id",
                as: "Post"
            }
            )
        }
    }
    PostImage.init(
        {
            id: {
                allowNull: false,
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: UUIDV4,
            },
            postId: {
                allowNull: false,
                type: DataTypes.UUID,
            },
            postImagePath: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "PostImage",
            tableName: "postImages",
            timestamps: true,
            paranoid: true,
        },
    );
    return PostImage;
};
