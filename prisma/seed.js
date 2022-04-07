const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
	const alice = await prisma.user.create({
		data: { name: 'Alice' },
	});

	const bob = await prisma.user.create({
		data: { name: 'Bob' },
	});

	const fred = await prisma.user.create({
		data: { name: 'Fred' },
	});

	await prisma.channel.create({
		data: {
			name: 'classroom',
			users: {
				connect: [{ id: alice.id }, { id: bob.id }, { id: fred.id }],
			},
		},
	});

	await prisma.channel.create({
		data: {
			name: 'off-topic',
			users: {
				connect: [{ id: alice.id }, { id: bob.id }],
			},
		},
	});

	// Add the following channels with the members:
	// - classroom: everyone
	// - off-topic: bob and alice only
	process.exit(0);
}

console.log('Running seed file');
seed()
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
	})
	.finally(() => process.exit(1));
