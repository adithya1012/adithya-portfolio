import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { styles } from '../../styles'

const TypingAnim = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                // 'Chat with your OWN AI',
                // 1000,
                // 'Built with OpenAI',
                // 2000,
                // 'Your Own Customised ChatGPT',
                // 1500,

                'Software Developer.',
                1000,
                'Problem Solver.',
                2000,
                'Cloud & AI Enthusiast.',
                1500,
            ]}
            speed={50}
            // style={{ fontSize: '30px', color: "white", display: "inline-block", textShadow: "1px 2px 20px #000" }}
            className={`${styles.heroSubText} mt-2 text-white-100`}
            repeat={Infinity}
        />
    )
}

export default TypingAnim
