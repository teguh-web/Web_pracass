function prosesTransaksi() {
    console.log("Pembayaran");

    
    let barang = ["Gergaji", "Palu", "Tang"];
    console.log("Customer menginput barang: ", barang.join(", "));

    let metodePembayaran = "Transfer Bank";
    console.log(href=ee"pembayaran.html", metodePembayaran);

    let rekeningBenar = "088107651190";
    let passwordBenar = "pracassid";
    let percobaan = 0;
    let maxPercobaan = 3;
    let sukses = false;

    while (percobaan < maxPercobaan) {
        let inputRekening = "088107651190"; 
        let inputPassword = "pracassid"; 
        
        if (inputRekening === rekeningBenar && inputPassword === passwordBenar) {
            sukses = true;
            console.log("Login berhasil. Melanjutkan proses pembayaran...");
            break;
        } else {
            console.log("Nomor rekening atau password salah. Coba lagi.");
        }
        percobaan++;
    }

    if (sukses) {
        console.log("Cek bukti pembayaran: Pembayaran berhasil!");
    } else {
        console.log("Transaksi gagal setelah 3 kali percobaan.");
    }

    console.log("Selesai");
}


prosesTransaksi();