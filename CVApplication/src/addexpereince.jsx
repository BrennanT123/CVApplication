

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
                {data.map((e) => (
                <div key={e.id} className='applicantExperience'>
                    <input type="text" name='company' placeholder='Company'/>
                    <input type="text" name='position' placeholder='Position'/>
                    <input type="text" name='duration' placeholder='Duration' />
                    <textarea name="description" id="description" placeholder='Description'></textarea>
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


