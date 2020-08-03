const { User } = require("../../../models");

module.exports = async (req, res) => {
    const id = req.params.id;

    const userIds = req.query.user_ids || [];

    const sqlOptions = {
        attributes: ["id", "name", "email", "role", "profession", "avatar"],
    };

    if (userIds) {
        sqlOptions.where = {
            id: userIds,
        };
    }

    const user = await User.findAll(sqlOptions);
    if (!user || user.length == 0) {
        return res.status(404).json({
            status: "error",
            message: "User not found",
        });
    }

    return res.json({
        status: "success",
        data: user,
    });
};
