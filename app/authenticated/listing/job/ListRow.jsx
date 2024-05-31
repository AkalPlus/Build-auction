'use client'

import Image from 'next/image'
import dayjs from 'dayjs'

import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

import { logo } from '@/public/Image'
import jobType from '@/app/constants/jobType'

const ListRow = (props) => {
  const { name, type, price, thumbnail, createdAt } = props

  console.log(props)

  const date = new Date(createdAt)
  const formattedDate = dayjs(date).format('DD-MMM-YYYY hh:mm A')

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={thumbnail || logo.src}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name || ''}</TableCell>
      <TableCell>
        <Badge variant={type === jobType.REPAIR ? 'outline' : 'secondary'}>
          {type || ''}
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{'₹' + price || 0}</TableCell>
      <TableCell className="hidden md:table-cell">{formattedDate}</TableCell>
    </TableRow>
  )
}

export default ListRow
