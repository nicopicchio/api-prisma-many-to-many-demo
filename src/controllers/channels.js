const prisma = require('../utils/prisma');

const getChannels = async (req, res) => {
	const channelsList = await prisma.channel.findMany({
		include: {
			users: true,
		},
	});
	res.json({ channelsList });
};

module.exports = { getChannels };
