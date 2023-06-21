import DataTable from 'react-data-table-component'
import './App.css'
import { Count, Course, Nom } from './components/Exo/Exo'
import { useState } from 'react';
import { DataFetch } from './components/Api/Api';



function App()  {

  const columns = [
  {
    name: <b>Nom</b>,
    selector: (row: { nom: any; }) => row.nom,
    sortable: true,
  },
  {
    name: <b>Prenom</b>,
    selector: (row: { prenom: any; }) => row.prenom,
    sortable: true,
  },
  {
    name: <b>Ville</b>,
    selector: (row: { ville: any; }) => row.ville,
    sortable: true,
  }
];

const [data, setData] = useState([
    { nom: "Booth", prenom: "Cliff", ville: "Hollywood" },
    { nom: "Lebowski", prenom: "Jeff", ville: "Los Angeles" },
    { nom: "Vega", prenom: "Vincent", ville: "Los Angeles" },
    { nom: "Kiddo", prenom: "Beatrix", ville: "El Paso" },
]);
  return (
    <>
      <Nom />
      <Count />
      <Course />
      <DataTable
          columns={columns} 
          data={data}
          defaultSortFieldId={1}
      />
      <DataFetch />
    </>
  )
}




    
export default App
