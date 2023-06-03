import { useEffect, useState } from "react";
import db from "./firebase";
import {
  collection,
  setDoc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore/lite";

export default function Home() {
  const [data, setData] = useState({
    kelas: "",
    nama: "",
    kota: "",
    namaAyah: "",
    namaIbu: "",
  });
  const [dataTampil, SetDataTampil] = useState([]);
  const [selected] = useState("kelas 1");
  const kelas2 = [
    { kelas: "kelas 1" },
    { kelas: "kelas 2" },
    { kelas: "kelas 2" },
  ];
  // console.log("datat tampil", dataTampil);
  useEffect(() => {
    async function fetchData() {
      try {
        const collectionRef = collection(db, "kelas 1");
        const querySnapshot = await getDocs(collectionRef);

        const documentsData = querySnapshot.docs.map((doc) => doc.data());
        SetDataTampil(documentsData);

        // console.log("kelas satu:", documentsData);
      } catch (error) {
        console.log("Error:", error);
      }
    }

    fetchData();
  }, [db]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    e.preventDefault();
    // console.log("sebelum", data);

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  // console.log("sesudah", data);
  // console.log("user", db);
  const saveData = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "kelas " + data.kelas, data.nama), {
      nama: data.nama,
      kota: data.kelas,
      namaAyah: data.namaAyah,
      namaIbu: data.namaIbu,
    });
  };

  const hapusdata = async (v) => {
    try {
      await deleteDoc(doc(db, "kelas 1", v));
      console.log("data terhapus");
      // fetchData();
    } catch (error) {
      console.log("errornya", error);
    }
  };

  return (
    <div className="px-14 ">
      <form className="ml-16" onSubmit={saveData}>
        <div>kelas</div>
        <input
          required
          className=" border border-black"
          type="text"
          name="kelas"
          onChange={handleChange}
        />
        <div>nama</div>
        <input
          required
          className="border border-black"
          type="text"
          name="nama"
          onChange={handleChange}
        />
        <div>kota</div>
        <input
          required
          className="border border-black"
          type="text"
          name="kota"
          onChange={handleChange}
        />{" "}
        <div>nama ibu</div>
        <input
          required
          className="border border-black"
          type="text"
          name="namaIbu"
          onChange={handleChange}
        />
        <div>nama ayah</div>
        <input
          required
          className="border border-black"
          type="text"
          name="namaAyah"
          onChange={handleChange}
        />
        <div>
          <button className=" bg-green-500  h-7 w-16" type="submit">
            save
          </button>
        </div>
        <br />
      </form>

      <hr />
      {dataTampil.map((v, i) => (
        <div
          className="h-[150px] w-full p-8 shadow-lg hover:bg-slate-50"
          key={i}
        >
          <div> nama : {v.nama}</div>
          <div> nama Ayah : {v.namaAyah}</div>

          <button
            className="h-10 w-[50px] bg-red-300"
            onClick={(e) => hapusdata(v.nama)}
          >
            hapus
          </button>
        </div>
      ))}
    </div>
  );
}
