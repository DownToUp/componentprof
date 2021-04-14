import ProfilPhoto from './/component/Profil/ProfilPhoto'
import FulName from './/component/Profil/FullName'
import Address from './/component/Profil/Address'
import "./App.css"

const App = _ => {

  return(
      <div className="ranger container">
        <ProfilPhoto />
        <div>
        <FulName />
        <Address />
        </div>
        
      </div>
  );
}
 
export default App;
