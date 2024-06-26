import { TechnologyNameUrl } from "data";
import { Socials } from "./Socials";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div>
          <p className="text-2xl text-teal-800 mb-2">
            Thank you for visiting! 👋
          </p>
          <p>
            Copyright &copy; {new Date().getFullYear()} Juan Alejandro Morais.
            This site was built with{" "}
            <Link
              href={TechnologyNameUrl["Next.js"]}
              rel="noopener noreferrer"
              target="_blank"
            >
              Next.js
            </Link>{" "}
            and{" "}
            <Link
              href={TechnologyNameUrl["Tailwind CSS"]}
              rel="noopener noreferrer"
              target="_blank"
            >
              Tailwind CSS
            </Link>
            .
          </p>
        </div>
        <Socials />
      </div>
    </footer>
  );
};
