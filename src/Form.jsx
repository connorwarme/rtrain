const Form = () => {
  return ( 
    <>
      <form>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>About</label>
          <textarea />
        </div>
        <div>
          <label>Interests</label>
          <select name="" id="">
            <option value="nutrition">Nutrition</option>
            <option value="longevity">Longevity</option>
            <option value="genetics">Genetics</option>
            <option value="labs">labs</option>
          </select>
        </div>
        <div>
          <fieldset>
            <legend>Options</legend>
            <div>
              <label>Morning Appointment</label>
              <input type="checkbox" name="morning" />
            </div>
            <div>
              <label>Afternoon Appointment</label>
              <input type="checkbox" name="afternoon" />
            </div>
            <div>
              <label>Evening Appointment</label>
              <input type="checkbox" name="evening" />
            </div>
          </fieldset>
        </div>
      </form>
    </>
   );
}
 
export default Form;