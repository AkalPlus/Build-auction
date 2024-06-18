'use client'

import Image from 'next/image'
import dayjs from 'dayjs'

import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

import { logo } from '@/public/Image'
import jobType from '@/app/constants/jobType'
import { Star } from 'lucide-react'

const ListRow = (props) => {
  const { name, type, description, profileImage, memberSince, rating } = props

  console.log(props)

  const date = new Date(memberSince)
  const formattedDate = dayjs(date).format('DD-MMM-YYYY hh:mm A')

  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={profileImage || logo.src}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{name || ''}</TableCell>
      <TableCell className="font-medium">{description || ''}</TableCell>
      <TableCell>
        <Badge
          variant={type === jobType.REPAIR ? 'outline' : 'secondary'}
          className="font-medium"
        >
          {type || ''}
        </Badge>
      </TableCell>
      <TableCell className="flex items-center justify-start gap-2 font-medium">
        <Star />
        {rating || ''}
      </TableCell>
      <TableCell className="hidden md:table-cell">{formattedDate}</TableCell>
    </TableRow>
  )
}

export default ListRow
