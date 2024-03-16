import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent} from "../constants";
import Section from "./Section";
import { LeftCurve} from "./design/Collaboration";
import react from "../assets/collaboration/react.png"
import typescript from "../assets/collaboration/typescript.png"
import python from "../assets/collaboration/python.png"
import mongodb from "../assets/collaboration/mongodb.png"
import node from "../assets/collaboration/node.png"
import nextjs from "../assets/collaboration/nextjs.png"
import docker from "../assets/collaboration/docker.png"
import figma from "../assets/collaboration/figma.png"
import code from "../assets/collaboration/code.png"

const collabAppsext = [
  {
    id: "0",
    title: "React",
    icon: react,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "typescript",
    icon: typescript,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "python",
    icon: python,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "mongodb",
    icon: mongodb,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "nextjs",
    icon: nextjs,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "node",
    icon: node,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "docker",
    icon: docker,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "figma",
    icon: figma,
    width: 38,
    height: 32,
  },
];

const Collaboration = () => {
  return (
    <Section id="skills" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
          Experience and Skillset
          </h2>
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={code}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabAppsext.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve/>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
