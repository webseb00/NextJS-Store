import React from 'react'
import styles from '../styles/Pagination.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai'

const Pagination = ({ meta: { pagination } }) => {
  const { query } = useRouter()
  
  const generatePageNumbers = () => {
    const nums = []
    for(let i=1;i<=pagination.pageCount; i++) {
      nums.push(i)
    }

    return nums;
  }

  return (
    <div className={styles.pagination}>
      <ul className={styles.pagination__list}>
        {
          pagination.page !== 1 ?
          <li>
            <Link
              className={styles.pagination__link}
              href={{
                pathname: `/products/${query.name}`,
                query: { page: '1' },
              }}
            >
              <AiOutlineDoubleLeft className={styles.pagination__icon} />
            </Link>
          </li> : ''
        }
        {generatePageNumbers().map((item, idx) => (
          <li key={idx}>
            <Link
              className={`${styles.pagination__link} ${Number(query.page) === idx+1 ? styles.pagination__link_active : ''}`}
              href={{
                pathname: `/products/${query.name}`,
                query: { page: `${idx+1}` },
              }}
            >
              {idx+1}
            </Link>
          </li>
        ))}
        {
          pagination.pageCount !== Number(query.page) ? 
          <li>
            <Link
              className={styles.pagination__link}
              href={{
                pathname: `/products/${query.name}`,
                query: { page: pagination.pageCount },
              }}
            >
              <AiOutlineDoubleRight className={styles.pagination__icon} />
            </Link>
          </li> : ''
        }
      </ul>
    </div>
  )
}

export default Pagination