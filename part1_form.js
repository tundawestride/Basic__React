
//3. Build a form
function ReactBasicForm({ onSubmit }) {
    return (
        <form id='form' onSubmit={onSubmit}>
            <div className='form__field'>
                <label>FirstName</label>
                <input type='text' name='firstName' />
            </div>
            <div className='form__field'>
                <label>LastName</label>
                <input type='text' name='lastName' />
            </div>
            <div className='form__submit'>
                <button type='submit'>Submit {name} </button>
            </div>
        </form>
    )
}

//2. Function sent properties to ReactBasicform()
function App() {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        let formValues = {};

        for (const [name, value] of formData) {
            formValues = {
                ...formValues,
                [name]: value,
            };
        }
        console.log(formValues);
        const fullname = `${formValues.firstName} ${formValues.lastName}`

        alert(`Hello ${fullname}`)
    };

    return (
        <div>
            <ReactBasicForm onSubmit={handleOnSubmit} />
        </div>
    );
}

//1. Create root element
const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)