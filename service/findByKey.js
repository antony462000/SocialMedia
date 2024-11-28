const { User } = require("../models");
const { Op } = require("sequelize");

module.exports = async (mobile, email) => {

    try {
        return user = await User.findOne({
            where: {
                [Op.or]: [
                    { mobile: mobile },
                    { email: email }
                ]
            }
        });

    } catch (error) {
        throw error;
    }
};
