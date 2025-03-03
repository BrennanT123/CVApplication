import handleChange from "./handleChange";

function Experience({data, handleExperienceUpdate})
{
    const clickNewExperience = ()=> {
        handleExperienceUpdate([...data, {
            company: '',
            position: '',
            duration: '',
            description: '',
            id: crypto.randomUUID(),
        },
    ]);

    }
    const onDelete = (data,key)=>
        {
            const newData = data.filter((item) => item.id !== key);
            handleExperienceUpdate(newData);
        }
    return(
        <div>
            <div className='education'>
                <h2>Experience</h2>
                {data.map((e,index) => (
                <div key={e.id} className='applicantExperience'>
                    <input type="text" name='company' placeholder='Company' value={e.company} onChange={(event)=>handleChange(index,'company',event.target.value,handleExperienceUpdate,data)}/>
                    <input type="text" name='position' placeholder='Position' value={e.position} onChange={(event)=>handleChange(index,'position',event.target.value,handleExperienceUpdate,data)}/>
                    <input type="text" name='duration' placeholder='Duration' value={e.duration} onChange={(event)=>handleChange(index,'duration',event.target.value,handleExperienceUpdate,data)}/>
                    <textarea name="description" id="description" placeholder='Description' value={e.description} onChange={(event)=>handleChange(index,'description',event.target.value,handleExperienceUpdate,data)}></textarea>
                    <button className='deleteButton' onClick={ ()=> onDelete(data,e.id)}>
                        Delete
                    </button>
                </div>
                ))}
                <button className='addExperience' onClick={clickNewExperience}>Add Experience</button>
            </div>

        </div>
    )
}

export default Experience


