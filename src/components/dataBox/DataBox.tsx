import React from 'react'
interface DataBoxProps {
    className?: string;
    texto: string;
  }
const DataBox  =({ className, texto }: DataBoxProps) => {
  return (
    <div
      className={`bg-transparent rounded-2xl border-4 " ${className}`}
    >
      {texto}
    </div>
  )
}

export default DataBox