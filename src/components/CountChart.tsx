'use client'

import Image from 'next/image'
import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: 'Total',
    count: 106,
    fill: 'white',
  },
  {
    name: 'Girls',
    count: 53,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 53,
    fill: '#C3EBFA',
  },
]

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
}

function CountChart() {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
      {/* chart */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src='/moreDark.png' alt='students' width={20} height={20} />
      </div>
      {/* chart */}
      <div className='relative w-full h-[75%]'>
        <ResponsiveContainer>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='40%'
            outerRadius='100%'
            barSize={32}
            data={data}
          >
            <RadialBar background dataKey='count' />
          </RadialBarChart>
        </ResponsiveContainer>
        <Image
          src='/maleFemale.png'
          alt='male or famale'
          width={50}
          height={50}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
        />
      </div>

      {/* bottom */}
      <div className='flex justify-center gap-16'>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-mySky rounded-full'></div>
          <h1 className='font-bold'>1.234</h1>
          <h2 className='text-sm text-gray-300'>Boys (55%)</h2>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='w-5 h-5 bg-myYellow rounded-full'></div>
          <h1 className='font-bold'>1.334</h1>
          <h2 className='text-sm text-gray-300'>Girls (32%)</h2>
        </div>
      </div>
    </div>
  )
}

export default CountChart
