-- CreateTable
CREATE TABLE "_UsersOnChannels" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_UsersOnChannels_AB_unique" ON "_UsersOnChannels"("A", "B");

-- CreateIndex
CREATE INDEX "_UsersOnChannels_B_index" ON "_UsersOnChannels"("B");

-- AddForeignKey
ALTER TABLE "_UsersOnChannels" ADD FOREIGN KEY ("A") REFERENCES "Channel"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_UsersOnChannels" ADD FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
