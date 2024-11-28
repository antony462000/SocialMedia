const { User } = require("../models")

module.exports = async (data) => {
    return await User.update(data.data,
        {
            where: {
                id: data.id
            }
        })

}