import { Search } from '@/svgImports'
import React from 'react'
import { motion } from "framer-motion"
import { Education } from '@/interfaces';
import { useRouter } from 'next/router';

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: .13 } },
};

const childVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 },
};

const EducationLine = ({ title, onClick }: { title: string, onClick: any }) => (
  <motion.div className='flex justify-between' variants={childVariants}>
    <div className='flex items-center gap-8'>
      <div className='w-20 h-20 rounded-lg bg-black' />
      <p>{title}</p>
    </div>
    <div onClick={onClick} className='flex items-center justify-center w-12 h-12 bg-background rounded-full cursor-pointer hover:scale-105 transition'>
      <Search />
    </div>
  </motion.div>
)

const CompletedEducations = ({ educations }: { educations: Education[] }) => {
  const router = useRouter()

  const handleClick = (id: string) => {
    const currentPath = router.asPath.split('/');
    const studentId = currentPath[2];
    router.push(`/profilim/${studentId}/tamamlananegitimler/${id}`);
  }

  return (
    <motion.div className='cardcontainer' variants={containerVariants} initial="hidden" animate="visible">
      <p className='font-semibold'>Tamamladığı Eğitimler</p>
      {educations?.length ?
        <p className='text-lightText text-sm'>{educations?.length} eğitimi tamamladı</p> :
        <p className='text-lightText text-sm'>Tamamladığı eğitim bulunmamaktadır.</p>
      }
      <motion.div className='flex flex-col py-12 gap-8' variants={containerVariants}>
        {
          educations?.map((k, i) => (
            <EducationLine key={k.title} title={k.title} onClick={() => handleClick(k._id!)} />
          ))
        }
      </motion.div>
    </motion.div>
  )
}

export default CompletedEducations