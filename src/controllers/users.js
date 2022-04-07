const prisma = require('../utils/prisma');

const getUsers = async (req, res) => {
	const usersList = await prisma.user.findMany({
		include: {
			channels: true,
		},
	});
	res.json({ usersList });
};

module.exports = { getUsers };
