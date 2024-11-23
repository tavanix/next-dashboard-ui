'use client'

import Image from 'next/image'
import React, { PureComponent } from 'react'
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 20,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 13,
  },
  {
    name: 'Wen',
    present: 40,
    absent: 10,
  },
  {
    name: 'Thu',
    present: 50,
    absent: 39,
  },
  {
    name: 'Fri',
    present: 30,
    absent: 48,
  },
]

function AttendanceChart() {
  return (
    <div className='bg-white rounded-lg p-4 h-full'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src='/moreDark.png' alt='attendance' width={20} height={20} />
      </div>
      <ResponsiveContainer width='100%' height='90%'>
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray='3 3' vertical={false} stroke='#ddd' />

          <XAxis
            dataKey='name'
            axisLine={false}
            tick={{ fill: '#d1d5db' }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} />

          <Tooltip
            contentStyle={{ borderRadius: '10px', borderColor: 'lightgray' }}
          />

          <Legend
            align='left'
            verticalAlign='top'
            wrapperStyle={{ paddingTop: '20px', paddingBottom: '40px' }}
          />

          <Bar
            dataKey='present'
            fill='#FAE27C'
            legendType='circle'
            radius={[5, 5, 0, 0]}
          />

          <Bar
            dataKey='absent'
            fill='#C3EBFA'
            legendType='circle'
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AttendanceChart
