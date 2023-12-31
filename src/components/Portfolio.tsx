import React, { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import Image1 from '../assets/12R.jpg';
import Image2 from '../assets/16.jpg';
import Image3 from '../assets/10R.jpg';
import Image4 from '../assets/13.jpg';

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
        src: Image1,
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    },
    {
        id: 2,
        title: 'JavaScriprt',
        src: Image2,
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    },
    {
        id: 3,
        title: 'Vue',
        src: Image3,
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    },
    {
        id: 4,
        title: 'Games',
        src: Image4,
        alt: 'React projects: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda culpa, odio similique reiciendis animi debitis at necessitatibus explicabo excepturi voluptate dignissimos ipsa. Eos modi excepturi voluptatum ullam quos ea culpa?',
    }
]

const Single = ({ title, src, alt, id }: ItemType) => {

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(
        scrollYProgress,
        [0,1],
        [-500, 500],
    );

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ ref }>
                        <img src={src} alt={alt} />
                    </div>
                    <motion.div className="textContainer" style={{ y }}>
                        <h2>{title}</h2>
                        <p>{alt}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
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