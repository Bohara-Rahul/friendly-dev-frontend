import type { Route } from "./+types";
import { Form } from "react-router";

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name");
  const email = formData.get("email") as string;
  const subject = formData.get("subject");
  const message = formData.get("message");

  const errors: Record<string, string> = {};

  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Invalid email format";
  }
  if (!subject) errors.subject = "Subject is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const data = {
    name,
    email,
    subject,
    message,
  };

  return { message: "Form submitted successfully", data };
}

const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};

  return (
    <section className="max-w-3xl mx-auto mt-12 px-6 py-8 bg-gray-900">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">
        📬 Contact Me
      </h2>

      <form
        action="https://formspree.io/f/mldlwqrb"
        method="post"
        className="space-y-6"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm text-gray-300 font-bold"
          >
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-300 font-bold"
          >
            Email
          </label>

          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm text-gray-300 font-bold"
          >
            Subject
          </label>

          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm text-gray-300 font-bold"
          >
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-gray-100"
          />
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactPage;
