import { CardContainer, CardBody, CardItem } from "./3d-card";


export function ThreeDCardDemo() {
  return (
    <CardContainer className="flex">
      <CardItem translateZ="10" className=" mt-4">
        <img
          src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          height="100"
          width="100"
          className="object-cover h-82 rounded-xl group-hover/card:shadow-xl"
          alt="thumbnail"
        />
      </CardItem>
      <CardBody className="h-fit w-fit ml-2 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem]  rounded-xl p-6 border  ">

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>


      </CardBody>
    </CardContainer>
  );
}
