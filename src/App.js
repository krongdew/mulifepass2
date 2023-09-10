import './App.css';
import Button from 'react-bootstrap/Button';
//componeent ไม่ต้องใส่นามสกุลไฟล์ แต่ css ใสา่
import Test from './components/Test';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>click me</Button>
        {/* short tag */}
        <Nav />
        {/* ส่งพรอบเพอตี้ ส่ง props */}
        <Test 
          name="P'kan" 
          //  ตัวเลขทุกตัวใส่ใน {}
         age={500}
        />
      </header>
    </div>
  );
}

export default App;
