import { useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const initialFormState = {
    colour: "",
    activity: [],
    text: "",
    name: "",
    email: "",
  };
  const [form, setForm] = useState(initialFormState);

  // const [form, setForm] = useState({
  //   colour: "",
  //   activity: [],
  //   text: "",
  //   name: "",
  //   email: "",
  // });

  const [answerList, setAnswerList] = useState([]);

  const resetForm = () => {
    setForm(initialFormState);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    setAnswerList([...answerList, form]);
    resetForm();
  };

  const handleChange = (event) => {
      console.log(event.target);
      const {name, value, type} = event.target;

      if (type === "checkbox") {
        setForm((prev) => {
          const activity = prev.activity.includes(value) ? prev.activity.filter((item) => item !== value) : [...prev.activity, value];
          return { ...prev, [name] : activity}
        })
      } else {
        setForm({...form, [name] : value});
      }

      //  switch(type) {
        
      //   case 'text':
      //     setForm({...form, [name] : value});
      //     break;
      //   case 'email':
      //     setForm({...form, [name] : value});
      //     break;
      //   case 'textarea':
      //     setForm({...form, [name] : value});
      //     break;
      //   case 'checkbox':
      //     setForm({...form, [name] : value});
      //     break;
      //   case 'radio':
      //     setForm({...form, [name] : value});
      //     break;
      //   case 1:
      //     default:
      //     console.log('Hit Nothing :(')
      //     console.log(type)
      //  }
  };

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answerList} />
      </section>
      <section className="survey__form">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            {[1, 2, 3, 4].map((index) => (
              <label>
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
              <label>
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
              name="name"
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
