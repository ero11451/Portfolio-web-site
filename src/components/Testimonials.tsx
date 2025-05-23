import { InfiniteMovingCards } from "./ui/infinite-moving-cards";



const testimonials = [
  {
    quote:
      "Working with Osamuyi Joseph Ero was seamless. The web app they built for us not only looked great but also performed flawlessly. Their technical skills and professionalism exceeded our expectations.",
    name: "Sarah Okoro",
    title: "Product Manager, NovaTech",
  },
  {
    quote:
      "Their ability to explain complex tech concepts in a simple, engaging way is unmatched. Thanks to their content, I finally grasped how APIs and backend services work together.",
    name: "Ibrahim Lawal",
    title: "Computer Science Student",
  },
  {
    quote:
      "A rare blend of deep technical expertise and a genuine passion for teaching. Osamuyi Joseph Ero is a go-to resource for anyone looking to level up in full-stack development or AI.",
    name: "Chinedu Madu",
    title: "Software Engineer, Paystack",
  },
  {
    quote:
      "We collaborated on a content series, and I was impressed by their clarity, creativity, and ability to connect with audiences. Their presence elevates any project.",
    name: "Daniel K.",
    title: "Tech YouTuber & Educator",
  },
  {
    quote:
      "From architecture decisions to deployment, Osamuyi Joseph Ero handled our SaaS project like a pro. Efficient, reliable, and always ready with thoughtful solutions.",
    name: "Adaeze Umeh",
    title: "CTO, Spryline Solutions",
  },
];


export  function Testimonials() {
  return (
    <div>
        <div className="lg:mx-auto max-w-sm px-4 py-2 font-sans antialiased md:max-w-6xl md:px-8 lg:px-12 lg:mt-20 text-white flex flex-col gap-4 pb-10 p-20">
        <p className="text-4xl">Testimonials</p>
        <p className="font-thin text-sm text-">
          this are some testimonials from my clients: </p>
        </div>
    <div className=" rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
    </div>
  );
}