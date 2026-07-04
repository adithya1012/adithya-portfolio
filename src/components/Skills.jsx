import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const SkillCategory = ({ index, title, color, items }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.2, 0.75)}
    className="bg-tertiary rounded-2xl p-6 sm:p-8 w-full shadow-card"
  >
    <h3 className={`${color} text-[20px] font-bold`}>{title}</h3>

    <div className="mt-4 flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item}
          className="bg-black-100 text-white-100 text-[14px] py-2 px-4 rounded-full"
        >
          {item}
        </span>
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I work with
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Skills.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-7">
        {skills.map((category, index) => (
          <SkillCategory key={category.title} index={index} {...category} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
