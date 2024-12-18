export async function GET(req) {
    // INI DUMMY
    const questions = [
        { question: "Seberapa sering Anda merasa cemas dalam situasi sehari-hari?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa percaya diri dengan kemampuan diri Anda?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda mengalami masalah terkait kesehatan mental?", type: "truefalse", value: { true: 1, false: 0 } },
        { question: "Seberapa sering Anda merasa sedih atau putus asa tanpa alasan yang jelas?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda mengalami sakit kepala dalam seminggu terakhir?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa tekanan darah Anda tidak stabil?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa tidur Anda tidak berkualitas atau kurang cukup?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda mengalami masalah pernapasan saat beraktivitas?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering lingkungan Anda terganggu oleh tingkat kebisingan yang tinggi?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa puas Anda dengan kondisi tempat tinggal Anda saat ini?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa aman Anda merasa di lingkungan tempat tinggal Anda?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering kebutuhan dasar Anda (makanan, air, pakaian) tidak terpenuhi?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa puas Anda dengan pencapaian akademik Anda saat ini?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa terbebani oleh beban studi yang Anda jalani?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa baik hubungan Anda dengan guru atau dosen?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa cemas tentang masa depan karier Anda?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda mendapatkan dukungan dari keluarga atau teman?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa tertekan oleh teman sebaya untuk melakukan sesuatu yang tidak nyaman bagi Anda?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa kegiatan ekstrakurikuler membantu mengurangi stres Anda?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa menjadi target bullying atau intimidasi?", type: "likert5", value: 5 }, // max value is 5
        { question: "Seberapa sering Anda merasa stres dalam mengelola tanggung jawab sehari-hari?", type: "likert5", value: 5 }, // max value is 5
    ];

    return new Response(JSON.stringify(questions), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
