import './App.css';
import {useEffect, useState} from 'react';
import { useCombobox } from "downshift"
import { Input } from "antd"

import axios from "axios";

function App() {

const [candidate, setCandidate] = useState(
  {
    _id: '',
    city: '',
    type: '',
    active: '',
    name: '',
    bio: '',
    policy1: '',
    policy1detail: '',
    policy2: '',
    policy2detail: '',
    policy3: '',
    policy3detail: '',
    policy4: '',
    policy4detail: '',
    policy5: '',
    policy5detail: '',
    policy6: '',
    policy6detail: '',
    policy7: '',
    policy7detail: '',
    policy8: '',
    policy8detail: '',
    policy9: '',
    policy9detail: '',
    policy10: '',
    policy10detail: ''
  });

  const [candidates, setCandidates] = useState([
    {
      _id: '',
    city: '',
    type: '',
    active: '',
    name: '',
    bio: '',
    policy1: '',
    policy1detail: '',
    policy2: '',
    policy2detail: '',
    policy3: '',
    policy3detail: '',
    policy4: '',
    policy4detail: '',
    policy5: '',
    policy5detail: '',
    policy6: '',
    policy6detail: '',
    policy7: '',
    policy7detail: '',
    policy8: '',
    policy8detail: '',
    policy9: '',
    policy9detail: '',
    policy10: '',
    policy10detail: ''
    },
  ]);

  const [isPut, setIsPut] = useState(false);
  const [updatedCandidate, setUpdatedCandidate] = useState({
    city: '',
    type: '',
    active: '',
    name: '',
    bio: '',
    policy1: '',
    policy1detail: '',
    policy2: '',
    policy2detail: '',
    policy3: '', 
    policy3detail: '',
    policy4: '',
    policy4detail: '',
    policy5: '',
    policy5detail: '',
    policy6: '',
    policy6detail: '',
    policy7: '',
    policy7detail: '',
    policy8: '',
    policy8detail: '',
    policy9: '',
    policy9detail: '',
    policy10: '',
    policy10detail: '',
    id: ''

  });

  useEffect(() => {
    fetch('/candidates')
    .then(res => {
      if (res.ok) {
          return res.json();
        }
      })
      .then((jsonRes) => setCandidates(jsonRes))
      .catch((err) => console.log(err));
    }, [candidates]);

    const [inputItems, setInputItems] = useState([])
    const [users, setUsers] = useState([])
    const [singleUser, setSingleUser] = useState("")
    //tester
    const [title, setTitle] = useState('')
    //tester
    useEffect(() => {
      fetch("/foundcandidate")
        .then((response) => response.json())
        .then((data) => setUsers(data))
    }, [])

    const {
      isOpen,
      getMenuProps,
      getInputProps,
      getComboboxProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox({
      items: inputItems,
      onInputValueChange: ({ inputValue }) => {
        setInputItems(
          users.filter((item) =>
            item.name.toLowerCase().startsWith(inputValue.toLowerCase())
          )
        )
      },
    })
  

     

function handleChange(event) {
  const {city,type,active,name,bio,
        policy1,policy1detail,
        policy2, policy2detail,
        policy3, policy3detail,
        policy4, policy4detail,
        policy5, policy5detail,
        policy6, policy6detail,
        policy7, policy7detail,
        policy8, policy8detail, 
        policy9, policy9detail, 
        policy10, policy10detail, value} = event.target;
        setCandidate((prevInput) => {
          return {
              ...prevInput,
              [city]: value,
              [type]: value,
              [active]: value,
              [name]: value,
              [bio]: value,
              [policy1]: value,
              [policy1detail]: value,
              [policy2]: value,
              [policy2detail]: value,
              [policy3]: value,
              [policy3detail]: value,
              [policy4]: value,
              [policy4detail]: value,
              [policy5]: value,
              [policy5detail]: value,
              [policy6]: value,
              [policy6detail]: value,
              [policy7]: value,
              [policy7detail]: value,
              [policy8]: value,
              [policy8detail]: value,
              [policy9]: value,
              [policy9detail]: value,
              [policy10]: value,
              [policy10detail]: value,
           
            };
          });
        }

        function deleteCandidate(id){
          axios.delete('/delete/' + id);
          alert('Candidate deleted');
          console.log('Deleted candidate with id ${id}');
        }

        function openUpdate(id) {
          setIsPut(true);
          setUpdatedCandidate(prevInput => {
            return(
              {
                ...prevInput,
                id: id,
                
          }
          )

        })

      }

      function updateCandidate(id) {
        axios.put('/put/' + id, updatedCandidate);
        alert("Candidate updated");
        console.log('Candidate with id ${id} updated')
      }

      function handleUpdate(event) {
        const {city,type,active,name,bio,
          policy1,policy1detail,
          policy2, policy2detail,
          policy3, policy3detail,
          policy4, policy4detail,
          policy5, policy5detail,
          policy6, policy6detail,
          policy7, policy7detail,
          policy8, policy8detail, 
          policy9, policy9detail, 
          policy10, policy10detail, value} = event.target;
        setUpdatedCandidate(prevInput => {
          return(
            {
              ...prevInput,
              [city]: city,
              [type]: value,
              [active]: value,
              [name]: value,
              [bio]: value,
              [policy1]: value,
              [policy1detail]: value,
              [policy2]: value,
              [policy2detail]: value,
              [policy3]: value,
              [policy3detail]: value,
              [policy4]: value,
              [policy4detail]: value,
              [policy5]: value,
              [policy5detail]: value,
              [policy6]: value,
              [policy6detail]: value,
              [policy7]: value,
              [policy7detail]: value,
              [policy8]: value,
              [policy8detail]: value,
              [policy9]: value,
              [policy9detail]: value,
              [policy10]: value,
              [policy10detail]: value,

            }
          )
        })
        console.log(updatedCandidate);
      }

        function addCandidate(event){
          event.preventDefault();
          const newCandidate = {
            city:candidate.city,
            type:candidate.type,
            active:candidate.active,
            name:candidate.name,
            bio:candidate.bio,
            policy1:candidate.policy1,
            policy1detail:candidate.policy1detail,
            policy2:candidate.policy2,
            policy2detail:candidate.policy2detail,
            policy3:candidate.policy3,
            policy3detail:candidate.policy3detail,
            policy4: candidate.policy4,
            policy4detail:candidate.policy4,
            policy5: candidate.policy5,
            policy5detail:candidate.policy5detail,
            policy6: candidate.policy6,
            policy6detail:candidate. policy6detail,
            policy7:candidate.policy7,
            policy7detail:candidate.policy7detail,
            policy8: candidate.policy8,
            policy8detail: candidate. policy8detail,
            policy9:candidate.policy9,
            policy9detail: candidate.policy9detail,
            policy10: candidate.policy10,
            policy10detail: candidate.policy10detail

          };

          axios.post('/newcandidate', newCandidate);
          console.log(newCandidate)
        }

    

  return (
    <div className="App">
      {!isPut ? (
      <div className="main">
      
        <input onChange={handleChange} name="city" value={candidate.city} placeholder="city"></input>
        <input onChange={handleChange} name="type" value={candidate.type} placeholder="type"></input> 
        <input onChange={handleChange} name="active" value={candidate.active} placeholder="active"></input>
        <input onChange={handleChange} name="name" value={candidate.name} placeholder="name"></input>
        <input onChange={handleChange} name="bio" value={candidate.bio} placeholder="bio"></input>
        <input onChange={handleChange} name="policy1" value={candidate.policy1} placeholder="policy1"></input>
        <input onChange={handleChange} name="policy1detail" value={candidate.policy1detail} placeholder="policy1detail"></input>
        <input onChange={handleChange} name="policy2" value={candidate.policy2} placeholder="policy2"></input>
        <input onChange={handleChange} name="policy2detail" value={candidate.policy2detail} placeholder="policy2detail"></input>
        <input onChange={handleChange} name="policy3" value={candidate.policy3} placeholder="policy3"></input>
        <input onChange={handleChange} name="policy3detail" value={candidate.policy3detail} placeholder="policy3detail"></input>
        <input onChange={handleChange} name="policy4" value={candidate.policy4} placeholder="policy4"></input>
        <input onChange={handleChange} name="policy4detail" value={candidate.policy4detail} placeholder="policy4detail"></input>
        <input onChange={handleChange} name="policy5" value={candidate.policy5} placeholder="policy5"></input>
        <input onChange={handleChange} name="policy5detail" placeholder="policy5detail"></input>
        <input onChange={handleChange} name="policy6" value={candidate.policy6} placeholder="policy6"></input>
        <input onChange={handleChange} name="policy6detail" value={candidate.policy6detail} placeholder="policy6detail"></input>
        <input onChange={handleChange} name="policy7" value={candidate.policy7} placeholder="policy7"></input>
        <input onChange={handleChange} name="policy7detail" value={candidate.policy7detail} placeholder="policy7detail"></input>
        <input onChange={handleChange} name="policy8" value={candidate.policy8} placeholder="policy8"></input>
        <input onChange={handleChange} name="policy8detail" value={candidate.policy8detail} placeholder="policy8detail"></input>
        <input onChange={handleChange} name="policy9" value={candidate.policy9} placeholder="policy9"></input>
        <input onChange={handleChange} name="policy9detail" value={candidate.policy9detail} placeholder="policy9detail"></input>
        <input onChange={handleChange} name="policy10" value={candidate.policy10} placeholder="policy10"></input>
        <input onChange={handleChange} name="policy10detail" value={candidate.policy10detail} placeholder="policy10detail"></input>
        <button onClick={addCandidate}>ADD CANDIDATE</button>
        <div className="App">
     
      <div {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search"
          enterButton="Search"
          size="large"
        />
      </div>
      
      <ul {...getMenuProps()}>
        {isOpen &&
          candidates.map((candidate, index) => (
            <span
              key={candidate.id}
              {...getItemProps({ candidate, index })}
              onClick={() => setSingleUser(candidate.name)}
            > 
                 <div key={candidate._id}> 
            <p>{candidate.city}</p>
            <p>{candidate.type}</p>
            <p>{candidate.active}</p>
            <p>{candidate.name}</p>
            <p>{candidate.bio}</p>
            <p>{candidate.policy1}</p>
            <p>{candidate.policy1detail}</p>
            <p>{candidate.policy2}</p>
            <p>{candidate.policy2detail}</p>
            <p>{candidate.policy3}</p>
            <p>{candidate.policy3detail}</p>
            <p>{candidate.policy4}</p>
            <p>{candidate.policy4detail}</p>
            <p>{candidate.policy5}</p>
            <p>{candidate.policy5detail}</p>
            <p>{candidate.policy6}</p>
            <p>{candidate.policy6detail}</p>
            <p>{candidate.policy7}</p>
            <p>{candidate.policy7detail}</p>
            <p>{candidate.policy8}</p>
            <p>{candidate.policy8detail}</p>
            <p>{candidate.policy9}</p>
            <p>{candidate.policy9detail}</p>
            <p>{candidate.policy10}</p>
            <p>{candidate.policy10detail}</p>
            <button onClick={()=> deleteCandidate(candidate._id)}>DELETE</button>
            <button onClick={() => openUpdate(candidate._id)}>UPDATE</button>
            </div>
            
            </span>
          ))}
      </ul>
    </div>
  
      
      
      </div>

          


      ) : (
        <div className="main">
        
        <input onChange={handleUpdate} name="city" value={updatedCandidate.city} placeholder="city"></input>
        <input onChange={handleUpdate} name="type" value={updatedCandidate.type} placeholder="type"></input> 
        <input onChange={handleUpdate} name="active" value={updatedCandidate.active} placeholder="active"></input>
        <input onChange={handleUpdate} name="name" value={updatedCandidate.name} placeholder="name"></input>
        <input onChange={handleUpdate} name="bio" value={updatedCandidate.bio} placeholder="bio"></input>
        <input onChange={handleUpdate} name="policy1" value={updatedCandidate.policy1} placeholder="policy1"></input>
        <input onChange={handleUpdate} name="policy1detail" value={updatedCandidate.policy1detail} placeholder="policy1detail"></input>
        <input onChange={handleUpdate} name="policy2" value={updatedCandidate.policy2} placeholder="policy2"></input>
        <input onChange={handleUpdate} name="policy2detail" value={updatedCandidate.policy2detail} placeholder="policy2detail"></input>
        <input onChange={handleUpdate} name="policy3" value={updatedCandidate.policy3} placeholder="policy3"></input>
        <input onChange={handleUpdate} name="policy3detail" value={updatedCandidate.policy3detail} placeholder="policy3detail"></input>
        <input onChange={handleUpdate} name="policy4" value={updatedCandidate.policy4} placeholder="policy4"></input>
        <input onChange={handleUpdate} name="policy4detail" value={updatedCandidate.policy4detail} placeholder="policy4detail"></input>
        <input onChange={handleUpdate} name="policy5" value={updatedCandidate.policy5} placeholder="policy5"></input>
        <input onChange={handleUpdate} name="policy5detail" value={updatedCandidate.policy5detail} placeholder="policy5detail"></input>
        <input onChange={handleUpdate} name="policy6" value={updatedCandidate.policy6} placeholder="policy6"></input>
        <input onChange={handleUpdate} name="policy6detail" value={updatedCandidate.policy6detail} placeholder="policy6detail"></input>
        <input onChange={handleUpdate} name="policy7" value={updatedCandidate.policy7} placeholder="policy7"></input>
        <input onChange={handleUpdate} name="policy7detail" value={updatedCandidate.policy7detail} placeholder="policy7detail"></input>
        <input onChange={handleUpdate} name="policy8" value={updatedCandidate.policy8} placeholder="policy8"></input>
        <input onChange={handleUpdate} name="policy8detail" value={updatedCandidate.policy8detail} placeholder="policy8detail"></input>
        <input onChange={handleUpdate} name="policy9" value={updatedCandidate.policy9} placeholder="policy9"></input>
        <input onChange={handleUpdate} name="policy9detail" value={updatedCandidate.policy9detail} placeholder="policy9detail"></input>
        <input onChange={handleUpdate} name="policy10" value={updatedCandidate.policy10} placeholder="policy10"></input>
        <input onChange={handleUpdate} name="policy10detail" value={updatedCandidate.policy10detail} placeholder="policy10detail"></input>
        <button onClick={() =>updateCandidate(updatedCandidate.id)}>UPDATE CANDIDATE</button>

        <div {...getComboboxProps()}>
        <Input
          {...getInputProps()}
          placeholder="Search"
          enterButton="Search"
          size="large"
        />
      </div>
      
      <ul {...getMenuProps()}>
        {isOpen &&
          candidates.map((candidate, index) => (
            <span
              key={candidate.id}
              {...getItemProps({ candidate, index })}
              onClick={() => setSingleUser(candidate.name)}
            > 
                 <div key={candidate._id}> 
            <p>{candidate.city}</p>
            <p>{candidate.type}</p>
            <p>{candidate.active}</p>
            <p>{candidate.name}</p>
            <p>{candidate.bio}</p>
            <p>{candidate.policy1}</p>
            <p>{candidate.policy1detail}</p>
            <p>{candidate.policy2}</p>
            <p>{candidate.policy2detail}</p>
            <p>{candidate.policy3}</p>
            <p>{candidate.policy3detail}</p>
            <p>{candidate.policy4}</p>
            <p>{candidate.policy4detail}</p>
            <p>{candidate.policy5}</p>
            <p>{candidate.policy5detail}</p>
            <p>{candidate.policy6}</p>
            <p>{candidate.policy6detail}</p>
            <p>{candidate.policy7}</p>
            <p>{candidate.policy7detail}</p>
            <p>{candidate.policy8}</p>
            <p>{candidate.policy8detail}</p>
            <p>{candidate.policy9}</p>
            <p>{candidate.policy9detail}</p>
            <p>{candidate.policy10}</p>
            <p>{candidate.policy10detail}</p>
            <button onClick={()=> deleteCandidate(candidate._id)}>DELETE</button>
            <button onClick={() => openUpdate(candidate._id)}>UPDATE</button>
            </div>
            
            </span>
          ))}
      </ul>
    </div>
  
      
      
    
      )}
      
      {/* {candidates.map((candidate) => {
        return(
          <div key={candidate._id} style={{ background:'skyblue', width: "40%", margin: 'auto auto' }}> 
            <p>{candidate.city}</p>
            <p>{candidate.type}</p>
            <p>{candidate.active}</p>
            <p>{candidate.name}</p>
            <p>{candidate.bio}</p>
            <p>{candidate.policy1}</p>
            <p>{candidate.policy1detail}</p>
            <p>{candidate.policy2}</p>
            <p>{candidate.policy2detail}</p>
            <p>{candidate.policy3}</p>
            <p>{candidate.policy3detail}</p>
            <p>{candidate.policy4}</p>
            <p>{candidate.policy4detail}</p>
            <p>{candidate.policy5}</p>
            <p>{candidate.policy5detail}</p>
            <p>{candidate.policy6}</p>
            <p>{candidate.policy6detail}</p>
            <p>{candidate.policy7}</p>
            <p>{candidate.policy7detail}</p>
            <p>{candidate.policy8}</p>
            <p>{candidate.policy8detail}</p>
            <p>{candidate.policy9}</p>
            <p>{candidate.policy9detail}</p>
            <p>{candidate.policy10}</p>
            <p>{candidate.policy10detail}</p>
            <button onClick={()=> deleteCandidate(candidate._id)}>DELETE</button>
            <button onClick={() => openUpdate(candidate._id)}>UPDATE</button>
            
          

          
          </div>
          
        );
      })} */}
    </div>
    
  );
      

}

export default App;
