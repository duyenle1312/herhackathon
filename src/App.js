import logo from "./logo.svg";
import "./App.css";
import "./style/form.css";

function App() {
  var next_click = document.querySelectorAll(".next_button");
  var main_form = document.querySelectorAll(".main");
  var step_list = document.querySelectorAll(".progress-bar li");
  var num = document.querySelector(".step-number");
  let formnumber = 0;

  next_click.forEach(function (next_click_form) {
    next_click_form.addEventListener("click", function () {
      if (!validateform()) {
        return false;
      }
      formnumber++;
      updateform();
      progress_forward();
      contentchange();
    });
  });

  var back_click = document.querySelectorAll(".back_button");
  back_click.forEach(function (back_click_form) {
    back_click_form.addEventListener("click", function () {
      formnumber--;
      updateform();
      progress_backward();
      contentchange();
    });
  });

  var username = document.querySelector("#user_name");
  var shownname = document.querySelector(".shown_name");

  var submit_click = document.querySelectorAll(".submit_button");
  submit_click.forEach(function (submit_click_form) {
    submit_click_form.addEventListener("click", function () {
      shownname.innerHTML = username.value;
      formnumber++;
      updateform();
    });
  });

  var heart = document.querySelector(".fa-heart");
  heart.addEventListener("click", function () {
    heart.classList.toggle("heart");
  });

  var share = document.querySelector(".fa-share-alt");
  share.addEventListener("click", function () {
    share.classList.toggle("share");
  });

  function updateform() {
    main_form.forEach(function (mainform_number) {
      mainform_number.classList.remove("active");
    });
    main_form[formnumber].classList.add("active");
  }

  function progress_forward() {
    // step_list.forEach(list => {

    //     list.classList.remove('active');

    // });

    num.innerHTML = formnumber + 1;
    step_list[formnumber].classList.add("active");
  }

  function progress_backward() {
    var form_num = formnumber + 1;
    step_list[form_num].classList.remove("active");
    num.innerHTML = form_num;
  }

  var step_num_content = document.querySelectorAll(".step-number-content");

  function contentchange() {
    step_num_content.forEach(function (content) {
      content.classList.remove("active");
      content.classList.add("d-none");
    });
    step_num_content[formnumber].classList.add("active");
  }

  function validateform() {
    let validate = true;
    var validate_inputs = document.querySelectorAll(".main.active input");
    validate_inputs.forEach(function (vaildate_input) {
      vaildate_input.classList.remove("warning");
      if (vaildate_input.hasAttribute("require")) {
        if (vaildate_input.value.length == 0) {
          validate = false;
          vaildate_input.classList.add("warning");
        }
      }
    });
    return validate;
  }
  return (
    <div className="container">
      <div className="card">
        <div className="form">
          <div className="left-side">
            <div className="left-heading">
              <h3>indeed</h3>
            </div>
            <div className="steps-content">
              <h3>
                Step <span className="step-number">1</span>
              </h3>
              <p className="step-number-content active">
                Enter your personal information to get closer to companies.
              </p>
              <p className="step-number-content d-none">
                Get to know better by adding your diploma,certificate and
                education life.
              </p>
              <p className="step-number-content d-none">
                Help companies get to know you better by telling then about your
                past experiences.
              </p>
              <p className="step-number-content d-none">
                Add your profile piccture and let companies find youy fast.
              </p>
            </div>
            <ul className="progress-bar">
              <li className="active">Personal Information</li>
              <li>Education</li>
              <li>Work Experience</li>
              <li>User Photo</li>
            </ul>
          </div>
          <div className="right-side">
            <div className="main active">
              <small>
                <i className="fa fa-smile-o" />
              </small>
              <div className="text">
                <h2>Your Personal Information</h2>
                <p>
                  Enter your personal information to get closer to copanies.
                </p>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <input type="text" required require id="user_name" />
                  <span>First Name</span>
                </div>
                <div className="input-div">
                  <input type="text" required />
                  <span>Last Name</span>
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <input type="text" required require />
                  <span>Phone number</span>
                </div>
                <div className="input-div">
                  <input type="text" required require />
                  <span>E-mail Address</span>
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <select>
                    <option>Select Country</option>
                    <option>India</option>
                    <option>France</option>
                    <option>UK</option>
                    <option>USA</option>
                    <option>Germany</option>
                    <option>Russia</option>
                    <option>China</option>
                    <option>Japan</option>
                    <option>Pakistan</option>
                  </select>
                </div>
                <div className="input-div">
                  <select>
                    <option>Select City</option>
                    <option>New Delhi</option>
                    <option>Paris</option>
                    <option>London</option>
                    <option>Washington D.C.</option>
                    <option>Berlin</option>
                    <option>Moscow</option>
                    <option>Bejing</option>
                    <option>Tokyo</option>
                    <option>Islamabad</option>
                  </select>
                </div>
              </div>
              <div className="buttons">
                <button className="next_button">Next Step</button>
              </div>
            </div>
            <div className="main">
              <small>
                <i className="fa fa-smile-o" />
              </small>
              <div className="text">
                <h2>Education</h2>
                <p>Inform companies about your education life.</p>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <input type="text" required require />
                  <span>School Name</span>
                </div>
                <div className="input-div">
                  <input type="text" required />
                  <span>Board Name</span>
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <input type="text" required require />
                  <span>College/University name</span>
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <select>
                    <option>Select Course</option>
                    <option>BCA</option>
                    <option>B-TECH</option>
                    <option>BA</option>
                    <option>B-COM</option>
                    <option>B-SC</option>
                    <option>MBA</option>
                    <option>MCA</option>
                    <option>M-COM</option>
                    <option>M-TECH</option>
                  </select>
                </div>
              </div>
              <div className="buttons button_space">
                <button className="back_button">Back</button>
                <button className="next_button">Next Step</button>
              </div>
            </div>
            <div className="main">
              <small>
                <i className="fa fa-smile-o" />
              </small>
              <div className="text">
                <h2>Work Experiences</h2>
                <p>Can you talk about your past work experience?</p>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <input type="text" required require />
                  <span>Experience 1</span>
                </div>
                <div className="input-div">
                  <input type="text" required require />
                  <span>Position</span>
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <input type="text" required />
                  <span>Experience 2</span>
                </div>
                <div className="input-div">
                  <input type="text" required />
                  <span>Position</span>
                </div>
              </div>
              <div className="input-text">
                <div className="input-div">
                  <input type="text" required />
                  <span>Experience 3</span>
                </div>
                <div className="input-div">
                  <input type="text" required />
                  <span>Position</span>
                </div>
              </div>
              <div className="buttons button_space">
                <button className="back_button">Back</button>
                <button className="next_button">Next Step</button>
              </div>
            </div>
            <div className="main">
              <small>
                <i className="fa fa-smile-o" />
              </small>
              <div className="text">
                <h2>User Photo</h2>
                <p>Upload your profile picture and share yourself.</p>
              </div>
              <div className="user_card">
                <span />
                <div className="circle">
                  <span>
                    <img src="https://i.imgur.com/hnwphgM.jpg" />
                  </span>
                </div>
                <div className="social">
                  <span>
                    <i className="fa fa-share-alt" />
                  </span>
                  <span>
                    <i className="fa fa-heart" />
                  </span>
                </div>
                <div className="user_name">
                  <h3>Peter Hawkins</h3>
                  <div className="detail">
                    <p>
                      <a href="#">Izmar,Turkey</a>Hiring
                    </p>
                    <p>17 last day . 94Apply</p>
                  </div>
                </div>
              </div>
              <div className="buttons button_space">
                <button className="back_button">Back</button>
                <button className="submit_button">Submit</button>
              </div>
            </div>
            <div className="main">
              <svg
                className="checkmark"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 52 52"
              >
                <circle
                  className="checkmark__circle"
                  cx={26}
                  cy={26}
                  r={25}
                  fill="none"
                />
                <path
                  className="checkmark__check"
                  fill="none"
                  d="M14.1 27.2l7.1 7.2 16.7-16.8"
                />
              </svg>
              <div className="text congrats">
                <h2>Congratulations!</h2>
                <p>
                  Thanks Mr./Mrs. <span className="shown_name" /> your
                  information have been submitted successfully for the future
                  reference we will contact you soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
