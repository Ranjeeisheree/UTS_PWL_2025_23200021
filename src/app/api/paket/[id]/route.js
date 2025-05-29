import prisma from "@/lib/prisma";

export async function PUT(request, {params}) {
    const { id } = await params;
    const { kode, nama, description } = await request.json ();

    if(!kode || !nama || !description ) {
        return new Response(JSON.stringify({ error: 'Semua field wajib diisi' }), {status:400,});
    }

    const paket = await prisma.paket.update({
        where: { id: Number(id) },
        data: {kode, nama, description },
    });
    
    return new Response(JSON.stringify(paket), {status:200});
}

export async function DELETE(request, {params}) {
    const { id } = await params;

    if (!id) return new Response(JSON.stringify({ error: "ID tidak ditemukan" }),
        {status:400});

    const deletedPaket = await prisma.paket.delete({
        where: { id: Number(id) },
    });

    return new Response(JSON.stringify({ message: "Berhasil dihapus"}),
        {status: 200 });
} 