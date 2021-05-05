import NavBar from "components/NavBar";
import BarChart from "components/NavBar/BarChart";
import DataTable from "components/NavBar/DataTable";
import DonutChart from "components/NavBar/DonutChart";
import Footer from "components/NavBar/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6" >
            <h5 className="text-center text-secondary">Taxa de Sucesso (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6" >
            <h5 className="text-center text-secondary">Todas vendas</h5>
            <DonutChart />
          </div>
        </div>

<div className="py-3">

<h2 className="text-primary">Todas vendas</h2>

</div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
