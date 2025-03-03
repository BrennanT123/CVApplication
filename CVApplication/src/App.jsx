import { useState } from 'react'
import CVForm from './cvForm';
import './App.css'
import CVPreview from './cvPreview';

function App() {
  const [cvInputs, setCVInputs] = useState(
    {
      personalInfo: {
      fullName: "",
      email: "",
      phone:"",
      address: "",
      },

      education: [],
      experience: [],
      skills: [],
    }
  );

  const handeDataUpdate = (newData) =>
  {
    setCVInputs(newData)
  }

  return (
    <>
    <h1> CV Generator</h1>
    <div className='parentContainer'>
      <div className='form'>
        <CVForm cvData = {cvInputs} cvUpdate = {handeDataUpdate}/>

      </div>
      <div className='preview'>
        <CVPreview cvData = {cvInputs}></CVPreview>

      </div>
    </div>
    </>
  )
}

export default App
