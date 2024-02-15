import '../css/about.css';
import Person0 from '../utils/Person.json';

const Person = ({ id }) => {
    return (
        <div className="pbox">
            {Person0.map(person => (
                (person.id === id) && (
                    <div key={person.id}>
                        <img className="Pimg mx-auto mt-1 mb-2" src={person.image} alt="personimg" />
                        <div className="Pinfo">
                            <img src={person.logo} alt="personimg" />
                            <div className='name'>{person.name}</div>
                        </div>
                        <div className="Pdepart">{person.department}</div>
                        <div className="Pposi">{person.position}</div>
                        <div className='Prole'>{person.role}</div>
                    </div>
                )
            ))}
        </div>
    )
}

export default Person;