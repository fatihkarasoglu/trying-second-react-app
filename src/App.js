import { createModal, useModals } from "./utils/modal";
import Modal from "./modals";

function App() {

  const modals = useModals()

  return (
    <div>
      {modals.length > 0 && <Modal />}
      <button onClick={() => {
        createModal('login')
      }}>Modalı Aç</button>
    </div>
  );
}

export default App;