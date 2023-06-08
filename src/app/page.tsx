import Link from "next/link";

const socials = [
  {
    name: "Github",
    url: "https://github.com/sizarcorpse",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ramizimran/",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/sizarcorpse",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-slate-950 sm:p-24">
      <div className="container max-w-screen-md mx-auto">
        <h1 className="text-3xl font-bold text-slate-100 mb-4">sizar.io</h1>
        <p className="text-base text-slate-100 mb-4">
          Hi, I am a front-end web developer with a focus on JavaScript and a
          passion for building interactive and user-friendly web applications.
        </p>
        <div className="flex flex-row items-center justify-start gap-3">
          {socials.map((social, index) => (
            <Link href={social.url} key={index} target="_blank">
              <p className="text-base text-slate-100 hover:text-slate-200 underline">
                {social.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
