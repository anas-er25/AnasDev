"use client";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import Image from "next/image";
import { motion } from "framer-motion";
import ProfilePhoto from "@/assets/images/profile.jpg";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
const links = [
  { icon: <FaYoutube />, link: "https://www.youtube.com/@AjiNcodew" },
  { icon: <FaGithub />, link: "https://github.com/anas-er25" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anas-er-rakibi/" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/anas_errakibi" },
  { icon: <FaFacebook />, link: "https://www.facebook.com/taner.olmez.160" },
  { icon: <FaTwitter />, link: "https://x.com/Errakibi25" },
];
const buttonVariants = {
  hover: { scale: 1.1 },
  tap: { scale: 0.95 },
};
export const MyMe = () => {
  const ConnectClick = () => {
    const number = "+212696486911";
    window.open(`https://wa.me/${number}`, "_blank");
  };
  const DownloadCV = () => {
    const pdfUrl = "resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
      {/* Card contenant les informations personnelles */}
      <Card className="h-auto relative md:col-span-2 lg:col-span-1 overflow-hidden">
        <CardHeader
          eyebrow="Personal Information"
          description="Here are a few details about me."
          className="p-6 bg-gray-800 text-white rounded-tl-lg rounded-tr-lg"
        />
        {/* Image */}
        <div className="w-40 mx-auto mt-4 md:mt-0">
          <Image
            src={ProfilePhoto}
            alt="Profile Photo"
            className="rounded-lg border-4 border-gray-300 shadow-lg w-48 h-48 object-cover"
          />
        </div>
        <div className="p-6 text-gray-800 space-y-4">
          <p className="text-sky-400 hover:text-sky-500">
            <strong className="text-blue-500">Name:</strong> Anas ER-RAKIBI
          </p>
          <p>
            <strong className="text-blue-500">Email:</strong>{" "}
            <a
              href="mailto:errakibianasdev@gmail.com"
              className="text-sky-400 hover:text-sky-500 transition"
            >
              errakibianasdev@gmail.com
            </a>
          </p>
          <p className="text-sky-400 hover:text-sky-500">
            <strong className="text-blue-500">Phone:</strong>{" "}
            <button
              onClick={ConnectClick}
              className="text-sky-400 hover:text-sky-500 transition"
            >
              +212696486911
            </button>
          </p>
        </div>
      </Card>

      {/* Card contenant la bio et les réseaux sociaux */}
      <Card className="h-auto relative md:col-span-3 lg:col-span-2 overflow-hidden">
        <CardHeader
          eyebrow="My Bio"
          description="Discover a little more about who I am and what drives me."
          className="p-6 bg-gray-800 text-white rounded-tl-lg rounded-tr-lg"
        />
        <div className="p-6 text-white">
          <p>
            I am a passionate Full Stack Web Developer and a 3rd-year Computer
            Engineering student at SUPMTI Rabat. With expertise in technologies
            like HTML, CSS, JavaScript, PHP, Laravel, and Node.js, I excel at
            building intuitive, responsive web applications. My strong
            problem-solving skills, dedication to collaboration, and commitment
            to staying updated with the latest development trends empower me to
            create impactful digital solutions. Whether it&apos;s enhancing user
            interfaces or developing SaaS platforms, I bring creativity and
            precision to every project.
          </p>
        </div>

        <div className="p-6">
          <motion.button
            onClick={DownloadCV}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
            className="inline-block px-6 py-2 bg-gradient-to-r from-emerald-300 to-sky-400 text-white rounded-full shadow-md hover:from-emerald-400 hover:to-sky-500 transition-all duration-300"
          >
            Download CV
          </motion.button>
        </div>

        {/* Social Media Links */}
        <div className="p-6 flex justify-center gap-4 mt-6">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-500 transition text-3xl"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </Card>
    </div>
  );
};
