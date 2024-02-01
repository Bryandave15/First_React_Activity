
const Form = ( { numero_uno, numero_dos, setNum1, setNum2, handleFormSubmit } ) => {

    return (
     
            <form className='addForm' onSubmit={handleFormSubmit}>  

                <label htmlFor="addItem">Enter First Number</label>

                <input 
                    type="number" 
                    id="addIten"
                    placeholder="Add First Number"
                    required
                    value={numero_uno}
                    onChange={ (e)=>setNum1(e.target.value) }    
                />


                 <label htmlFor="addItem">Enter Second Number</label>

                  <input 
                        type="number" 
                        id="addItem"
                        placeholder="Add Second Number"
                        required
                        value={numero_dos}
                        onChange={ (e)=>setNum2(e.target.value) }    
                    />
 
 
                <button
                type="submit"
                >Save</button>
            </form>

       
    )


}


export default Form