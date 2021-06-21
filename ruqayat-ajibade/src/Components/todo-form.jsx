import '../Styles/todo-form.css';

// The states in the App component are passed in as properties so it can be accessed in this form component
function Form({inputText, setInputText, todos, setTodos}) {

	// this prevents the form from reloading the page when submitted
	const formSubmitHandler =(e) => {
		e.preventDefault();
	}
	
	// This get the value from the input field
	function InputTextHandler(e) {
		console.log(e.target.value);
		setInputText(e.target.value)
  }
//   This creates an object with the input field value, sets the completed value to false and generates a unique id for the object
	function SubmitInputHandler() {
		setTodos([
			...todos, {text:inputText, completed:false, id:new Date().getTime()}
		])
		// This sets the input field back to empty so it does not keep adding the same value over and over
		setInputText("")
  }


  return (
	<div className="todo-form-box" >

		<form className="todo-form" onSubmit={formSubmitHandler}>
			<input type="text" value={inputText} placeholder="Write your task here..." onChange={InputTextHandler}  className="todo-description" />
			<input type="submit" value="Save" id="input-btn" onClick={SubmitInputHandler} />
		</form>

	</div>
  );
};

export default Form;