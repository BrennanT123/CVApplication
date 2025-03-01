
import Experience from './addexpereince'
import Education from './addEducation'
import Skill from './addSkill'

function CVForm({cvData , cvUpdate})
{
    const handleExperienceUpdate = (updates) =>
    {
        cvUpdate({...cvData,experience: updates,})
    }

    const handleEducationUpdate = (updates) =>
        {
            cvUpdate({...cvData,education: updates,})
        }
        const handleSkillUpdate = (updates) =>
            {
                cvUpdate({...cvData,skills: updates,})
            }
        
    
    return(
        <>
        <div className='personalInfo'>
        <h2>Personal Information</h2>
        <input type='text' name= 'fullName' placeholder='Full Name'/>
        <input type="email" name='email' placeholder='Email'/>
        <input type='tel'name='phone'placeholder='Phone' />
        <input type="text" name='address' placeholder='address' />
        </div>

        <Experience data = {cvData.experience} handleExperienceUpdate = {handleExperienceUpdate}>
        </Experience>

        <Education data = {cvData.education} handleEducationUpdate = {handleEducationUpdate}>
        </Education>
        <Skill data={cvData.skills} handleSkillUpdate={handleSkillUpdate}></Skill>
        </>
        
    )
}

export default CVForm