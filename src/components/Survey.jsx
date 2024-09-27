import { useState } from "react";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [form, setForm] = useState({
    colour: "",
    activity: [],
    text: "",
    name: "",
    email: "",
  });

  const resetForm = () => {
    setForm(form);
  };

  const handleSubmit = (submittedForm) => {
    submittedForm.preventDefault();
    console.log(submittedForm);
    resetForm();
  };

  const handleChange = (event) => {
      console.log(event.target);
      const {name, value, type} = event.target;

       switch({name, value, type}) {
        case type === 'name':
          setForm({...form, [name] : value});
          break;
        case type === 'email':
          setForm({...form, [name] : value});
          break;
        case name === 'text':
          setForm({...form, [name] : value});
          break;
        case type === 'checkbox':
          setForm({...form, [name] : value});
          break;
        case type === 'radio':
          setForm({...form, [name] : value});
          break;
       }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {[1, 2, 3, 4].map((index) => (
              <label key={index}>
                <input
                  key={index}
                  type="radio"
                  name="colour"
                  value={index}
                  onChange={handleChange}
                />
                {index}
              </label>
            ))}
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            {[
              "Fly FPV drones",
              "Doing standing triple backflips",
              "Eat Cereal",
              "We can dance",
            ].map((activity) => (
              <label key={activity}>
                <input
                  type="checkbox"
                  name="activity"
                  value={activity}
                  onChange={handleChange}
                />
                {activity}
              </label>
            ))}
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea
              name="text"
              cols="30"
              rows="10"
              onChange={handleChange}
              value={form.text}
            ></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input
              type="name"
              name="username"
              onChange={handleChange}
              value={form.name}
            />
          </label>
          <label>
            Leave us your email pretty please??
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={form.email}
            />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Survey;
