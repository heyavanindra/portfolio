import scriblixImageMain from "public/images/scriblix-pro.png";
import sidefolioAceternity2 from "public/images/sidefolio-aceternity-2.png";
import sidefolioAlgochurn from "public/images/sidefolio-algochurn.png";
import sidefolioAlgochurn2 from "public/images/sidefolio-algochurn.png";
import sidefolioMoonbeam from "public/images/sidefolio-moonbeam.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";
import whisperBoxImage from "public/images/whisper-box.png";

export const products = [
  {
    href: "https://blog.aviii.xyz",
    title: "Scriblix Pro",
    description:
      "A design and development studio that focuses on building quality apps.",
    thumbnail: scriblixImageMain,
    images: [scriblixImageMain, sidefolioAceternity2],
    stack: ["React JS", "Tailwindcss", "Framer Motion", "Express JS"],
    slug: "scriblix",
    content: (
      <div>
        <p>
          Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
          dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
          cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
          cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
          non cupidatat duis esse velit ut culpa et.{" "}
        </p>
        <p>
          Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
          Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
          sit aute fugiat incididunt nostrud consequat proident fugiat id.
          Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
          reprehenderit. Cillum Lorem veniam eu magna exercitation.
          Reprehenderit adipisicing minim et officia enim et veniam Lorem
          excepteur velit adipisicing et Lorem magna.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://whisper.aviii.xyz",
    title: "Whisper Box",
    description:
      "A simple and secure way to send anonymous messages to your friends.",
    thumbnail: whisperBoxImage,
    images: [whisperBoxImage, sidefolioAlgochurn2],
    stack: ["Nextjs", "Tailwindcss"],
    slug: "whisper-box",
    content: (
      <div>
        <p>
          I have created a simple and secure way to send anonymous messages to
          your friends. The app is built with Next.js and Tailwind CSS, and it
          uses a serverless function to handle the message sending.
        </p>
        <p>
          This app allows users to send messages without revealing their
          identity, making it a fun and engaging way to communicate. The
          messages are stored securely and can be viewed by the recipient
          without any personal information being disclosed. Next .js provides a
          robust framework for building the application, while Tailwind CSS
          ensures a responsive and visually appealing design. The serverless
          function handles the backend logic, allowing for efficient message
          processing without the need for a dedicated server.
        </p>{" "}
      </div>
    ),
  },
];
