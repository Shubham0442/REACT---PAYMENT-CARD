
import './App.css';
import Data from "./Data.json"
import PayCard from "./components/PayCard"

function App() {
    
  
  return (
    <div>
         

         {Data.myData.map((payData)=>(

          <PayCard {...payData} payData={payData}/>

         ))}



    </div>
  );
}

export default App;
