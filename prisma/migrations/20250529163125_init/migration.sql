-- CreateTable
CREATE TABLE "paket" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "kode" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "paket_kode_key" ON "paket"("kode");
