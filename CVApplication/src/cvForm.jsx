
import Experience from './addexpereince'
import Education from './addEducation'
import Skill from './addSkill'

function CVForm({cvData , cvUpdate})
{

    const handlePersonalInfoChange = (e) => {
        cvUpdate({
            ...cvData,
            personalInfo: {
                ...cvData.personalInfo,
                [e.target.name]: e.target.value, // Dynamically updates the field based on input name
            },
        });
    };



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
                <input
                    type='text'
                    name='fullName'
                    placeholder='Full Name'
                    value={cvData.personalInfo.fullName}
                    onChange={handlePersonalInfoChange} 
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={cvData.personalInfo.email}
                    onChange={handlePersonalInfoChange} 
                />
                <input
                    type='tel'
                    name='phone'
                    placeholder='Phone'
                    value={cvData.personalInfo.phone}
                    onChange={handlePersonalInfoChange} 
                />
                <input
                    type='text'
                    name='address'
                    placeholder='Address'
                    value={cvData.personalInfo.address}
                    onChange={handlePersonalInfoChange} 
                />
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