import { Socials } from "./Socials";

export const Footer = () => {
  return (
    <footer>
      <div>
        <Socials className="my-0 flex-col md:flex-row" />
        <p className="mt-4">
          &copy; {new Date().getFullYear()} Juan Rodríguez Morais
        </p>
      </div>
    </footer>
  );
};
