export default function CVPreview({ cvData }) {
    return (
        <>
            <div className="personalInfo">
                <h1>{cvData.personalInfo.fullName}</h1>
                <div>{cvData.personalInfo.email}</div>
                <div>{cvData.personalInfo.phone}</div>
                <div>{cvData.personalInfo.address}</div>
            </div>
            <div className="education">
                <h2>Education</h2>
                {cvData.education.length > 0 ? (
                    cvData.education.map((e) => (
                        <div key={e.id}>
                            <h3>{e.school || 'Unnamed School'}</h3>
                            <div>{e.degree || 'No Degree Specified'}</div>
                            <div>{e.year || 'Year Not Provided'}</div>
                        </div>
                    ))
                ) : (
                    <div>No education added yet.</div>
                )}
            </div>
            <div className="experiences">
                <h2>Experiences</h2>
                {cvData.experience.length > 0 ? (
                    cvData.experience.map((e) => (
                        <div key={e.id}>
                            <h3>{e.company || 'Unnamed Company'}</h3>
                            <div>{e.position || 'Position not Specified'}</div>
                            <div>{e.duration || 'Duration Not Provided'}</div>
                            <div>{e.description || 'Description Not Provided'}</div>
                        </div>
                    ))
                ) : (
                    <div>No experiences added yet.</div>
                )}
            </div>
            <div className="skills">
                <h2>Skills</h2>
                {cvData.skills.length > 0 ? (
                    cvData.skills.map((e) => (
                        <div key={e.id}>
                            <h3>{e.skill || 'Unnamed Skill'}</h3>
                        </div>
                    ))
                ) : (
                    <div>No skills added yet.</div>
                )}
            </div>
        </>
    );
}
