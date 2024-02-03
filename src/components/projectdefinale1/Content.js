import React,{useEffect,useState}from 'react'
import "./content.css"
import intel from "./Perkakas/Intel1.jpeg"

const Content = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api-sekolah-indonesia.vercel.app/sekolah?page=1&perPage=5")
      .then((response) => response.json())
      .then((json) => setData(json.dataSekolah));
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <ul className="content">
        {data.map((item, i) => (
          <li key={i}>
            <div className="list">
            <h1>Data Sekolah : </h1>
            {/* <li>Provinsi :<br/><br/> {item.propinsi}</li> */}
            <li>Kabupaten Kota :<br/><br/> {item.kabupaten_kota}</li>
            <li>Kecamatan :<br/><br/> {item.kecamatan}</li>
            <li>Nama Sekolah :<br/><br/> {item.sekolah}</li>
            <li>Tingkat :<br/><br/> {item.bentuk}</li>
            <li>Alamat :<br/><br/> {item.alamat_jalan}</li></div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Content
