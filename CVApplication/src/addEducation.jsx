

function Education({data, handleEducationUpdate})
{
    const clickNewEducation = ()=> {
        handleEducationUpdate([...data, {
            school: '',
            degree: '',
            year: '',
            id: crypto.randomUUID(),
        },
    ]);

    }
    const onDelete = (data,key)=>
        {
            const newData = data.filter((item) => item.id !== key);
            handleEducationUpdate(newData);
        }
    return(
        <div>
            <div className='education'>
                <h2>Education</h2>
                {data.map((e) => (
                <div key={e.id} className='applicantEducation'>
                    <input type="text" name='school' placeholder='School'/>
                    <input type="text" name='degree' placeholder='Degree'/>
                    <input type="text" name='year' placeholder='Year' />
                    <button className='deleteButton' onClick={ ()=> onDelete(data,e.id)}>
                        Delete
                    </button>
                </div>
                ))}
                <button className='addEducation' onClick={clickNewEducation}>Add Education</button>
            </div>

        </div>
    )
}

export default Education


