import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface Hero7Props {
  heading: string;
  description: string;
  buttons?: Buttons;
  className?: string;
}

type Props = Partial<Hero7Props>;

const defaultProps: Hero7Props = {
  heading: "Hi, I'm Aashis Chalise",
  description:
    "Full Stack Engineer — I build performant, accessible web apps that delight users.",
  buttons: {
    primary: {
      text: "View My Work",
      url: "#projects",
    },
    secondary: {
      text: "Let's Talk",
      url: "#contact",
    },
  },
};

const Hero7 = (props: Props) => {
  const { heading, description, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="container text-center mx-auto">
        <div className="mx-auto flex max-w-5xl flex-col gap-6">
          <h1 className="mx-auto max-w-3xl text-3xl font-semibold lg:text-6xl">
            {heading}
          </h1>
          <p className="mx-auto max-w-4xl text-balance text-muted-foreground lg:text-lg">
            {description}
          </p>
        </div>
        {buttons?.primary && (
          <Button
            size="lg"
            className="mt-10 h-12 px-8 text-base"
            render={<a href={buttons.primary.url} />}
            nativeButton={false}
          >
            {buttons.primary.text}
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        )}
        {buttons?.secondary && (
          <Button
            size="lg"
            variant="outline"
            className="ml-4 mt-10 h-12 px-8 text-base"
            render={<a href={buttons.secondary.url} />}
            nativeButton={false}
          >
            {buttons.secondary.text}
          </Button>
        )}
      </div>
    </section>
  );
};

export { Hero7 };
