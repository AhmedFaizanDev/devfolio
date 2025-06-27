import { useState, useEffect, useRef } from "react";
import Filter from "bad-words";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import mail from "./mailer";
import styles from "./Contact.module.scss";
import { MENULINKS } from "../../constants";

const filter = new Filter();
filter.removeWords("hell", "god", "shit");

const toastOptions = {
  style: {
    borderRadius: "10px",
    background: "#333",
    color: "#fff",
    fontFamily: "sans-serif",
  },
};

const empty = () =>
  toast.error("Please fill the required fields", {
    id: "error",
  });

const error = () =>
  toast.error("Error sending your message", {
    id: "error",
  });

const success = () =>
  toast.success("Message sent successfully", {
    id: "success",
  });

const Contact = () => {
  const initialState = { name: "", email: "", message: "" };
  const [formData, setFormData] = useState(initialState);
  const [mailerResponse, setMailerResponse] = useState("not initiated");
  const [isSending, setIsSending] = useState(false);
  const buttonElementRef = useRef(null);
  const sectionRef = useRef(null);

  const handleChange = ({ target }) => {
    const { id, value } = target;
    value.length === 0 ? setIsSending(false) : setIsSending(true);
    setFormData((prevVal) => {
      if (
        value.trim() !== prevVal[id] &&
        value.trim().length > prevVal[id].trim().length
      ) {
        return { ...prevVal, [id]: filter.clean(value.trim()) };
      } else {
        return { ...prevVal, [id]: value };
      }
    });
  };

  const emptyForm = () => {
    setFormData(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    if (name === "" || email === "" || message === "") {
      empty();
      return setMailerResponse("empty");
    }

    setIsSending(true);
    mail({ name, email, message })
      .then((res) => {
        if (res.status === 200) {
          setMailerResponse("success");
          emptyForm();
        } else {
          setMailerResponse("error");
        }
      })
      .catch((err) => {
        setMailerResponse("error");
        console.error(err);
      });
  };

  useEffect(() => {
    setTimeout(() => {
      setMailerResponse("not initiated");
    }, 10000);
  }, [mailerResponse]);

  useEffect(() => {
    buttonElementRef.current?.addEventListener("click", (e) => {
      if (!buttonElementRef.current.classList.contains("active")) {
        buttonElementRef.current.classList.add("active");

        gsap.to(buttonElementRef.current, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(buttonElementRef.current, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  buttonElementRef.current.removeAttribute("style");
                  gsap.fromTo(
                    buttonElementRef.current,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        buttonElementRef.current.classList.remove("active");
                      },
                    }
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(buttonElementRef.current, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": "#9f55ff",
              "--right-wing-background": "#9f55ff",
              duration: 0.11,
            },
            {
              "--left-wing-background": "#8b31ff",
              "--right-wing-background": "#8b31ff",
              duration: 0.14,
            },
            {
              "--left-wing-background": "#8b31ff",
              "--right-wing-background": "#8b31ff",
              duration: 0.14,
            },
            {
              "--text-opacity": 1,
              "--border-radius": "1.5rem",
              duration: 0.2,
            },
          ],
        });
      }
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      id={MENULINKS[4].ref}
      className="section-container min-h-screen flex flex-col justify-center items-center"
    >
      <Toaster position="top-center" toastOptions={toastOptions} />
      <motion.div
        initial={{ opacity: 0, y: 64 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
    >
      <div>
          <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
          <form className="pt-10 sm:mx-auto sm:w-[30rem] md:w-[35rem] staggered-reveal" onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, y: 64 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <div className="relative mb-4">
              <input
                  id="name"
                type="text"
                  placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white"
                required
              />
            </div>
              <div className="relative mb-4">
              <input
                id="email"
                  type="email"
                  placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white"
                required
              />
            </div>
              <div className="relative mb-4">
              <textarea
                id="message"
                  placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                  className="w-full p-3 rounded bg-gray-800 text-white"
                  rows={5}
                required
              />
            </div>
          <button
            ref={buttonElementRef}
                type="submit"
                className="w-full py-3 rounded bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition"
                disabled={isSending}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </motion.div>
            {mailerResponse !== "not initiated" && (
              <div className="mt-4 text-center">
                {mailerResponse === "success" && (
                  <span className="text-green-500">Message sent successfully!</span>
                )}
                {mailerResponse === "error" && (
                  <span className="text-red-500">Error sending your message.</span>
                )}
                {mailerResponse === "empty" && (
                  <span className="text-yellow-500">Please fill the required fields.</span>
                )}
            </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;