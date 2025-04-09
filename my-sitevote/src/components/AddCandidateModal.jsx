import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'

const  AddCandidateModal =()  => {
    const [ fullName , setFullName ] = React.useState('')
    const [ motto , setMotto ] = React.useState('')
    const [ image , setImage ] = React.useState('')

    const dispatch = useDispatch()
    //close add candidate modal 
    const closeModal = () => {
        dispatch (UiActions.closeAddCandidateModal())
    }
  return (
    <section  className="modal">
        <div className="modal__content">
            <header className='modal__header'>
                <h4>Add Candidate</h4> 
                <button className="Close__modal" onClick={close}><IoMdClose/></button>
                
                  <form >
                    <div>
                        <h6> Candidate Name</h6>
                        <input type="text" value={fullName} name="fullName" onChange={e => setFullName(e.target.value)}/>
                    </div>
                    <div>
                        <h6> Candidate Motto</h6>
                        <input type="text" value={motto} name="motto" onChange={e => setMotto(e.target.value)}/>
                    </div>
                    <div>
                        <h6> Candidate Image</h6>
                        <input type="file"  name="Image" onChange={e => setImage(e.target.files[0])} accept='png, jpg ,jpeg,webp, avif'/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add Candidate</button>
                  </form>
                
    </header>
        </div>

    </section>


  )
}

export default AddCandidateModal