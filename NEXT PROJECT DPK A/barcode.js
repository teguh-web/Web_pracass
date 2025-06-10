
    let scanner;

    document.getElementById("start-scan").addEventListener("click", function () {
      if (scanner) {
        return; // Jangan render ulang jika sudah aktif
      }

      scanner = new Html5Qrcode("reader");
      scanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText, decodedResult) => {
          
          scanner.stop().then(() => {
            document.getElementById("result").classList.remove("hidden");
            document.getElementById("reader").innerHTML = '';
          }).catch(err => console.log(err));
        },
        (errorMessage) => {
          
        }
      );
    });
