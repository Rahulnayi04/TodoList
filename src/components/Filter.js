import { Fragment } from "react"

const Filter = (props) => {

    const fireFilter = (e) =>{
        
        if(e.target.value == 1){
            props.filterChangeHandler("All");
        }
        else if(e.target.value == 2){
            props.filterChangeHandler("completed");
        }
        else if(e.target.value == 3){
            props.filterChangeHandler("Pending");
        }
    }

    return (
        <Fragment>
        <select className="form-select mb-5" aria-label="Default select example" onChange={fireFilter}>
			<option selected>-- Select --</option>
			<option value="1">All</option>
			<option value="2">completed</option>
			<option value="3">Pending</option>
	  	</select>
        </Fragment>
    )
}

export default Filter