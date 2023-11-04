import React, { useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion';

interface ItemType {
    title: string;
    src: string;
    alt: string;
    id: number;
}

const items: ItemType[] = [
    {
        id: 1,
        title: 'React',
        src: '../assets/12R.jpg',
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    },
    {
        id: 2,
        title: 'JavaScriprt',
        src: '../assets/16.jpg',
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    },
    {
        id: 3,
        title: 'Vue',
        src: '../assets/10R.jpg',
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    },
    {
        id: 4,
        title: 'Games',
        src: '../assets/13.jpg',
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    }
]

const Single = ({ title, src, alt, id }: ItemType) => {
    return (
        <section>
            {title}
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref, 
        offset: ["end end", "start start"],
    });

    const scaleX = useSpring( scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })

  return (
    <div className='Portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item => {
            return <Single {...item} key={item.id} />
        })}
    </div>
  )
}

export default Portfolio