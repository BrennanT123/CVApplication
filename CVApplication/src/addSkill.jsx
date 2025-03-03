import handleChange from "./handleChange";


function Skill({data, handleSkillUpdate})
{
    const clickNewSkill = ()=> {
        handleSkillUpdate([...data, {
            skill: '',
            id: crypto.randomUUID(),
        },
    ]);

    }
    const onDelete = (data,key)=>
        {
            const newData = data.filter((item) => item.id !== key);
            handleSkillUpdate(newData);
        }
    return(
        <div>
            <div className='education'>
                <h2>Skills</h2>
                {data.map((e,index) => (
                <div key={e.id} className='applicantSkill'>
                    <input type="text" name='skill' placeholder='Skill' value={e.skill} onChange={(event)=>handleChange(index,'skill',event.target.value,handleSkillUpdate,data)}/>
                    <button className='deleteButton' onClick={ ()=> onDelete(data,e.id)}>
                        Delete
                    </button>
                </div>
                ))}
                <button className='addSkill' onClick={clickNewSkill}>Add Skill</button>
            </div>

        </div>
    )
}

export default Skill


