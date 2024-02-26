import React from 'react'
import styles from '../styles/services.module.css'
import Image from 'next/image'
import Link from 'next/link'
import servicesList from '../data/servicesList'

export default function Services() {
    return (
        <div className={styles.wrapper}>
            <p className={styles.title2}>PREMIUM QUALITY</p>
            <h1 className={styles.title}>Our Services Make Your Life Comfortable</h1>
            <div className={styles.grid}>
                {servicesList.map(
                    service => <div key={service.image} className={styles.element}>
                        <Link href={service.link}>
                            <div style={{ paddingBottom: 30, paddingTop: 30 }}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        className={styles.image}
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="
                                        (max-width: 640px) 100vw,
                                        (max-width: 1024px) 50vw,
                                        33vw
                                        "
                                    />
                                </div>
                                <p className={styles.title3}>Best Sercice</p>
                                <h3 className={styles.title4}>{service.title}</h3>
                                <p className={styles.description}>{service.description}</p>
                            </div>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}
