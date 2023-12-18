import React from 'react';

const ProductDetails = ({ product, onClose }) => {
  const onWhatsApp = () => {
    const phoneNumber = '6285713389415';
    const message = `Halo, saya ingin konsultasi terkait pemesanan ${product.title}.`;

    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 px-52">
      <div className="bg-white p-8 rounded-md flex gap-10">
        <img src={product.image} alt={product.title} className="mb-4 rounded-lg w-full" />
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-3xl text-slate-800 font-bold mb-2">{product.title}</h2>
            <p className="text-xl font-semibold mb-2 text-slate-600">Rp {product.price}</p>
          </div>
          <p className="mb-4 rounded-lg text-slate-600">{product.description}</p>
          {/* Add specific details for each product */}
          {product.id === 1 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Bahan:</p>
                <p className="text-slate-700">American, Nagata</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Charge:</p>
                <p className="text-slate-700">
                  Tambah Titik Bordir +5k, Tambah size XL Keatas +10k, Lengan pendek 5k, Variasi
                  Mayor Minor? Ask, Under 24 pcs? Ask
                </p>
              </div>
            </div>
          )}
          {product.id === 2 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi dan Fasilitas:</p>
                <p className="text-slate-700">
                  Cotton Combed 30s, Plastisol Doff / Glossy, Jahitan Rantai, Sablon 2 Sisi (A3)
                  S&K, 4 Warna Tinta, Bisa bawa sample, Free Konsultasi
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Change:</p>
                <p className="text-slate-700">
                  Lengan Panjang Biasa +7k, Lengan Panjang Rib +10k, Tambah Jumlah warna +2k, Tambah
                  Size lebih dari XL + 5k (Kelipatan), Naik 24s +5k (24 Pcs), Custom nama +5k, Under
                  24 pcs +5k, Diskon ? Ask
                </p>
              </div>
            </div>
          )}
          {product.id === 3 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Bahan:</p>
                <p className="text-slate-700">Micro , Milky , Baby Kanvas</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Bordir Jepang 4 Titik (Rapi Padat) , Non Variasi , Jahitan double , Bisa bawa
                  sample , Free Konsultasi & design , Kancing Snap Besi , Tali serut , Furing Asahi
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Charge:</p>
                <p className="text-slate-700">
                  Tambah Titik Bordir +5k , Resleting +5k , Tambah size XL Keatas +10k , Variasi
                  Mayor Minor? Ask , Under 24 pcs? Ask
                </p>
              </div>
            </div>
          )}
          {product.id === 4 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Bahan Tali Tissue 2,5 cm , Panjang total 70 cm , Full Print Full color , Opsional
                  Stoper / Vinyl , Pengait / Buckle aluminium anti karat , Minimal order 24 pcs
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Charge:</p>
                <p className="text-slate-700">
                  Under 24pcs ? ASK , Potongan 24pcs++ ? Ask , Nego Paket? Ask
                </p>
              </div>
            </div>
          )}
          {product.id === 5 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Bahan:</p>
                <p className="text-slate-700">Kanvas, Blacu, American</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Minimal pembuatan 15 pcs, Pembayaran DP 50%, Pelunasan COD/Transfer/E-Wallet,
                  Pengiriman luar daerah ongkir ditanggung customer, Mengisi Format yang diberikan
                  Admin
                </p>
              </div>
            </div>
          )}
          {product.id === 6 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Bahan</p>
                <p className="text-slate-700">Ukuran sablon 13x7cm, Sablon DTF</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Harap chat terlebih dahulu untuk megetahui info stok produk, File berupa PNG, CDR
                  (versi 2017), PDF (background wajib transparant), Jangan gunakan file SCREENSHOT,
                  karna akan mempengaruhi hasil sablon, File yang diedit oleh kami silakan order
                  iklan charge edit, Kami akan konfirmasi apablia terkendala pada file, apabila chat
                  kami tidak di tanggapi atau late respon itu kana mempengaruhi antrian cetak dan
                  proses.
                </p>
              </div>
            </div>
          )}
          {product.id === 7 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Bahan:</p>
                <p className="text-slate-700">Keramik, desain tidak ada batasan warna</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Minimal pembuatan 12 pcs, Pembayaran DP 50%, Pelunasan COD/Transfer/E-Wallet,
                  Pengiriman luar daerah ongkir ditanggung customer, Mengisi Format yang diberikan
                  Admin
                </p>
              </div>
            </div>
          )}
          {product.id === 8 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Bahan:</p>
                <p className="text-slate-700">Akrilik</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Akrilik Bening, Full Color UV Printing, Laser Cutting Rapi & Presisi, Minimal
                  Order 12 Pcs
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Ukuran:</p>
                <p className="text-slate-700">
                  Akrilik 1 sisi 16 cm², Akrilik 2 sisi 16 cm², Akrilik 1 sisi 25 cm², Akrilik 2
                  sisi 25 cm², Pin Ganci 4,4 cm, Pin Ganci 5,8 cm,
                </p>
              </div>
            </div>
          )}
          {product.id === 9 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Dry-Fit Jarum / Milano, Full Color Printing, Sublimasi, Jahitan Rapi Kuat, Bisa
                  bawa sample, Free Konsultasi, Free Design (S&K)
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Charge:</p>
                <p className="text-slate-700">
                  Lengan Panjang +10k, Kerah polo Kancing +10k, Tambah Size lebih dari XL + 5k
                  (Kelipatan), Under 24 pcs? Ask, Diskon ? Ask
                </p>
              </div>
            </div>
          )}
          {product.id === 10 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Bahan:</p>
                <p className="text-slate-700">American , Rib Stok , Micro Taslan</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi dan Fasilitas:</p>
                <p className="text-slate-700">
                  Bordir Jepang (Rapi Padat), Non Variasi, Kain Furing, Jahitan double, Kerah dengan
                  kain keras, Bisa bawa sample, Free Konsultasi & design
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Charge:</p>
                <p className="text-slate-700">
                  Tambah Titik Bordir +5k, Tambah size XL Keatas +10k, Variasi Mayor Minor? Ask,
                  Under 24 pcs? Ask
                </p>
              </div>
            </div>
          )}
          {product.id === 11 && (
            <div>
              <p className="font-semibold text-slate-700">Spesifikasi</p>
              <p className="text-slate-700">ID Card PVC 2 sisi dan Card Holder</p>
            </div>
          )}
          {product.id === 12 && (
            <div className="flex flex-col gap-4">
              <div>
                <p className="font-semibold text-slate-700">Spesifikasi:</p>
                <p className="text-slate-700">
                  Sablon 4 Warna Ukuran edang, 2 titik sablon, Non Variasi, Jahitan double, Bisa
                  bawa sample, Free Konsultasi & design, Tali serut, Hoodie
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Charge:</p>
                <p className="text-slate-700">
                  Tambah Titik Bordir +5k, Resleting +5k, Tambah size XL Keatas +10k, Warna sablon?
                  Ask, Variasi Mayor Minor? Ask, Under 24 pcs? Ask, Bahan lain? Ask
                </p>
              </div>
            </div>
          )}
          <div className="flex gap-3 my-10">
            <button
              onClick={onClose}
              className="w-full h-[50px] outline-none transition-all tracking-wide rounded-lg font-medium text-white bg-red-700 hover:bg-red-800"
            >
              CLOSE
            </button>
            <button
              onClick={onWhatsApp}
              className="w-full h-[50px] outline-none transition-all tracking-wide rounded-lg font-medium text-white bg-green-500 hover:bg-green-600"
            >
              WHATSAPP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
