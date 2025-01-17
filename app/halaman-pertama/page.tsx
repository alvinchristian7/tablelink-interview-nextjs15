"use client";

import karyawanJSON from "@/deskripsi_test/karyawan.json";
import { useEffect } from "react";

export default function HalamanPertama() {
  useEffect(() => {
    const sortByHobi = () =>
      karyawanJSON.toSorted((a, b) =>
        a.makanan_favorit.length > b.makanan_favorit.length ? -1 : 1
      );

    console.log("soal a. ");
    console.log(sortByHobi());
    console.log("soal b. ");
    console.log(
      karyawanJSON.toSorted((a, b) =>
        a.makanan_favorit.length > b.makanan_favorit.length ? -1 : 1
      )
    );
    console.log("soal c. ");
    karyawanJSON.forEach((karyawan) => {
      karyawan.makanan_favorit.forEach((restoran) => {
        restoran.menu.forEach((menu) => {
          if (["Nasi Goreng", "Air Mineral"].includes(menu.nama)) {
            console.log(restoran.restaurant, ":", karyawan.nama);
          }
        });
      });
    });
    console.log("soal d. ");
    let menuRestoranTerbanyak: any = [];
    let jumlahMenuTerbanyak = 0;
    karyawanJSON.forEach((karyawan) => {
      karyawan.makanan_favorit.forEach((restoran) => {
        if (restoran.menu.length > jumlahMenuTerbanyak) {
          jumlahMenuTerbanyak = restoran.menu.length;
          menuRestoranTerbanyak = [restoran];
        } else if (restoran.menu.length === jumlahMenuTerbanyak) {
          menuRestoranTerbanyak.push(restoran);
        }
      });
    });
    console.log(menuRestoranTerbanyak);
    console.log("soal e. ");
    const ferdinan = karyawanJSON.find(
      (karyawan) => karyawan.nama === "Ferdinan"
    );
    const fajar = karyawanJSON.find((karyawan) => karyawan.nama === "Fajar");
    fajar!.hobi = ferdinan!.hobi;
    console.log(sortByHobi());
    console.log("soal f. ");
    const indexPeter = karyawanJSON.findIndex(
      (karyawan) => karyawan.nama === "Peter"
    );
    const makananFavoritPeter = [...ferdinan!.makanan_favorit];
    fajar!.makanan_favorit.forEach((restoran) => {
      const indexRestoran = makananFavoritPeter.findIndex(
        (restoranFav) => restoranFav.id === restoran.id
      );
      if (indexRestoran !== -1) {
        restoran.menu.forEach((menu) => {
          const indexMenu = makananFavoritPeter[indexRestoran].menu.findIndex(
            (menuFav) => menuFav.id === menu.id
          );
          if (indexMenu === -1) {
            makananFavoritPeter[indexRestoran].menu.push(menu);
          }
        });
      } else {
        makananFavoritPeter.push(restoran);
      }
    });
    karyawanJSON[indexPeter].makanan_favorit = makananFavoritPeter;
    console.log(karyawanJSON[indexPeter]);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-center text-4xl font-bold">Lihat Console</h1>
    </div>
  );
}
