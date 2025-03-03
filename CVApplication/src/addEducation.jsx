import handleChange from "./handleChange";

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
                {data.map((e,index) => (
                <div key={e.id} className='applicantEducation'>
                    <input type="text" name='school' placeholder='School' value={e.school} onChange={(event)=>handleChange(index,'school',event.target.value,handleEducationUpdate,data)}/>
                    <input type="text" name='degree' placeholder='Degree' value={e.degree} onChange={(event)=>handleChange(index,'degree',event.target.value,handleEducationUpdate,data)}/>
                    <input type="text" name='year' placeholder='Year' value={e.year} onChange={(event)=>handleChange(index,'year',event.target.value,handleEducationUpdate,data)}/>
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


